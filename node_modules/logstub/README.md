# logstub

[![NPM](https://nodei.co/npm/logstub.png?downloads=true)](https://nodei.co/npm/logstub/)

[![Actual version published on npm](http://img.shields.io/npm/v/logstub.svg)](https://www.npmjs.org/package/logstub)
[![Master build](https://github.com/OutOfSyncStudios/logstub/actions/workflows/build-master.yml/badge.svg)](https://github.com/OutOfSyncStudios/logstub/actions/workflows/build-master.yml)
[![Total npm module downloads](http://img.shields.io/npm/dt/logstub.svg)](https://www.npmjs.org/package/logstub)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e65e02aa0b2f492199dfffbc747b9b43)](https://www.codacy.com/gh/OutOfSyncStudios/logstub/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=OutOfSyncStudios/logstub&amp;utm_campaign=Badge_Grade)
[![Codacy Coverage Badge](https://app.codacy.com/project/badge/Coverage/e65e02aa0b2f492199dfffbc747b9b43)](https://www.codacy.com/gh/OutOfSyncStudios/logstub/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=OutOfSyncStudios/logstub&amp;utm_campaign=Badge_Coverage)
[![Dependencies badge](https://david-dm.org/OutOfSyncStudios/logstub/status.svg)](https://david-dm.org/OutOfSyncStudios/logstub?view=list)

logstub is a basic library to stub logging calls when an external logger is expected to be passed to your libraries and applications.

### Installation

```
$ npm install logstub
```

### Usage
```js
  const LogStub = require('logstub');

  class YourClass {
    constructor(logger) {
      // Stub out the logger when none is passed to the class constructor.
      this.logger = logger || new LogStub();
    }

    someMethod() {
      try {
        this.logger.info('Some Logging Info');
      } catch (err) {
        this.logger.error(err);
      }
    }
  }
```

## API

The logging stub will handle method calls for `log`, `silly`, `debug`, `info`, `verbose`, `warn`, `error`, `critical`, `fatal`, `trace`, and `all` with any number of parameters making it compatible for stubbing general logging from a number of popular logging libraries such as [Winston](https://www.npmjs.com/package/winston), [Log4JS](https://www.npmjs.com/package/log4js), and [Bunyan](https://www.npmjs.com/package/bunyan).

It also supports all standard `console` methods.


# [License](#license)
<a name="license"></a>

Copyright (c) 2017-2019 Jay Reardon
Copyright (c) 2019-2021 Out of Sync Studios
Licensed under the MIT license.
