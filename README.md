![Ax.js](./src/ax.js.gif)

A microscopic, RESTful, AJAX browser library; just under 2kb.
* [Usage](#usage)
* [Use with browser window](#quick-start)
* [Use as generic module](#use-with-module)
* [Use with nodejs](#use-with-nodejs)

## Usage

```javscript

ax

```

## Use with browser window

```
<script src="ax.min.0.3.1.js"></script>
```

## Use with nodejs

Ax.js has been built with browserify, and works with both browserify and webpack.

Install via npm:

```
npm install axjs
```

*require* the module 
``` javascript
var ax = require('axjs');
```

## Use with generic module

Ax.js can be *required* in with a UMD or AMD library like requirejs.

``` javascript
var ax = require('ax.0.3.1');
```

