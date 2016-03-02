# passlawl.js
> Generate weird random passwords

[![Build Status](https://travis-ci.org/ecrmnn/passlawl.js.svg?branch=master)](https://travis-ci.org/ecrmnn/passlawl.js)
[![npm version](https://img.shields.io/npm/v/passlawl.js.svg)](http://badge.fury.io/js/passlawl.js)
[![npm version](https://img.shields.io/npm/dm/passlawl.js.svg)](http://badge.fury.io/js/passlawl.js)
[![npm version](https://img.shields.io/npm/l/passlawl.js.svg)](http://badge.fury.io/js/passlawl.js)

### Installation
```bash
npm install passlawl.js --save
```

### Usage
Generate random 4 word password in english (default)
```javascript
const passlawl = require('passlawl.js');

console.log(passlawl.get());
//=> AbsorbingBreathNeverSang
```

Genereate random 4 word password in norwegian (using locale)
```javascript
const passlawl = require('passlawl.js');

console.log(passlawl.locale('no').get());
//=> KongeSavnetSelvopptattEtterspørsel
```

### Related
- [passlawl](https://github.com/ecrmnn/passlawl) - CLI for this module

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)