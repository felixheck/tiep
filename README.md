# tiep
#### Custom filter to map a data type to a valid type of an input

[![Travis](https://img.shields.io/travis/felixheck/tiep.svg?maxAge=2592000)](https://travis-ci.org/felixheck/akaya/builds/) ![npm](https://img.shields.io/npm/dt/tiep.svg?maxAge=2592000)

---

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API](#api)
5. [Testing](#testing)
6. [Contribution](#contribution)
7. [License](#license)

## Introduction
This [AngularJS](https://github.com/angular/angular.js/) custom filter enables to map a data type to a valid type value of an HTML input. Just pass in a string or an object containing the data type and get the valid value.

The only dependencies are [AngularJS](https://github.com/angular/angular.js/) and [lodash](https://lodash.com).<br>
Tested against v1.5.6 but other versions should work.

## Installation
For installation use the [Node Package Manager](https://github.com/npm/npm):
```
$ npm install --save tiep
```

or clone the repository:
```
$ git clone https://github.com/felixheck/tiep
```

## Usage
#### Integration
Include **tiep** and **lodash** into your application:
``` html
<!DOCTYPE html>
<html ng-app="yourApp">
<head>
	...
</head>
<body>
	...

	<script src="../tiep.js"></script>
	<script src="../lodash.min.js"></script>
</body>
</html>
```

Declare a dependency on the **uXess** module:
``` js
angular.module('yourApp', [
	'tiep'
]);
```

#### In JavaScript
``` js
var dataType = 'boolean';

$filter('tiep')(dataType); // 'checkbox'
```

#### In HTML Template Binding
``` html
{{ 'boolean' | tiep }} // 'checkbox'
```

## API
`$filter('tiep')(input, [accessKey], [mapping])`

- `input {string | Object}` - The source object containing the data type.
- `accessKey {string | number}` - A custom key to access the passed in object. Default: `type`.
- `mapping {Object.<?string>}` - A custom dataType/type mapping.

The default mapping is:

``` js
{
  boolean: 'checkbox',
  date: 'date',
  number: 'number',
  string: 'text'
}
```

## Testing
First you have to install all dependencies:
```
$ npm install
```

To execute all unit tests based on file watcher, use:
```
$ npm test
// or
$ npm start
```

## Contribution
Fork this repository and push in your ideas.

Do not forget to add corresponding tests to keep up 100% test coverage.

In case of questions or suggestions just open an issue.

## License
The MIT License

Copyright (c) 2016 Felix Heck

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.