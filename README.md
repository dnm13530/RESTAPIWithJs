# Secure Backend Service

## Overview
This project implements a secure backend service using Node.js and Express. It includes basic security features such as rate limiting, IP blocking, and DDoS protection to safeguard the application against common security threats.

## Features
- **Rate Limiting:** Controls the number of requests a client can make in a specified time period.
- **IP Blocking:** Blocks requests from specific IP addresses.
- **DDoS Protection:** Mitigates Distributed Denial of Service (DDoS) attacks.

## Prerequisites
- Node.js (v14.x or higher)
- npm (v6.x or higher)

## Install Dependencies:
-npm install

## Set Up Environment Variables:
-Create a .env file in the root of the project and add the following content:
-PORT=3000
-RATE_LIMIT_WINDOW_MS=60000
-RATE_LIMIT_MAX_REQUESTS=10

## Usage
Start the Server:
node app.js

## Access the Service:
The service will be running on http://localhost:3000.

## Endpoints
GET /: Returns a welcome message.
GET /api/blocked-ips: Returns the list of currently blocked IP addresses.

## Dependencies
dotenv: Loads environment variables from a .env file.
express: Fast, unopinionated, minimalist web framework for Node.js.
express-rate-limit: Basic IP rate-limiting middleware for Express.
helmet: Helps secure Express apps by setting various HTTP headers.
ddos: DDoS protection middleware for Express.
@outofsync/express-ip-blacklist: Middleware to block requests from blacklisted IP addresses.

## Running and Testing the REST API
### Using Postman
Start Postman:
Open Postman application on your computer.
Test GET / endpoint:

Method: GET
URL: http://localhost:3000/
Click on Send.
You should receive a response with the message: Welcome to the secure backend service!.

Test GET /api/blocked-ips endpoint:
Method: GET
URL: http://localhost:3000/api/blocked-ips
Click on Send.
You should receive a JSON response with the list of currently blocked IP addresses.

### Using cURL
Open Command Line:
Open your terminal or command prompt.
Test GET / endpoint:
curl -X GET http://localhost:3000/
You should receive a response with the message: Welcome to the secure backend service!.

Test GET /api/blocked-ips endpoint:
curl -X GET http://localhost:3000/api/blocked-ips
You should receive a JSON response with the list of currently blocked IP addresses.

## Way Forward
Enhancing the security features and Implementation of this in the upcoming projects to secure the application from cyber attacks.
