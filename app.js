require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const winston = require('winston');
const { body, validationResult } = require('express-validator');
const Ddos = require('ddos');

const app = express();
app.use(express.json());
app.use(helmet()); // Security headers

// Logging setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// Initialize IP blacklist
let blacklistedIps = new Set(process.env.IP_BLOCKLIST ? process.env.IP_BLOCKLIST.split(',') : []);

// Middleware to check if IP is blacklisted
app.use((req, res, next) => {
  if (blacklistedIps.has(req.ip)) {
    logger.warn(`Blocked request from blacklisted IP: ${req.ip}`);
    return res.status(403).send('Your IP is blacklisted');
  }
  next();
});

// Rate Limiting
let limiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000, // 15 minutes
  max: process.env.RATE_LIMIT_MAX || 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// DDoS Protection
const ddos = new Ddos({ burst: process.env.DDOS_BURST || 10, limit: process.env.DDOS_LIMIT || 15 });
app.use(ddos.express);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Get server status
app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running', time: new Date() });
});

// Block an IP address
app.post('/api/block-ip', body('ip').isIP(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { ip } = req.body;
  blacklistedIps.add(ip);
  logger.info(`IP ${ip} blocked`);
  res.status(200).send(`IP ${ip} blocked`);
});

// Unblock an IP address
app.post('/api/unblock-ip', body('ip').isIP(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { ip } = req.body;
  blacklistedIps.delete(ip);
  logger.info(`IP ${ip} unblocked`);
  res.status(200).send(`IP ${ip} unblocked`);
});

// Get blocked IPs
app.get('/api/blocked-ips', (req, res) => {
  res.json({ blockedIps: [...blacklistedIps] });
});

// Configure rate limiting
app.post('/api/configure-rate-limiting', (req, res) => {
  const { windowMs, max } = req.body;

  limiter = rateLimit({
    windowMs: windowMs || process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000,
    max: max || process.env.RATE_LIMIT_MAX || 100,
  });

  app.use(limiter);
  logger.info(`Rate limiting configured: windowMs = ${windowMs}, max = ${max}`);
  res.status(200).send('Rate limiting configuration updated');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the stack trace to the console
  logger.error(err.stack);  // Log the stack trace using winston
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
