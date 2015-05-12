![Ax.js](http://i.imgur.com/twliVZx.png)

A microscopic, RESTful, AJAX browser library; just under 2kb.
* [Usage](#ax)
* [Examples](#examples)

Installation:
* [Browser](#browser)
* [NodeJS](#nodejs)
* [UMD / AMD Module](#commonjs)

## Ax

```javascript
var request = new Ax( Object || Arguments); 
```

### Arguments Method

```javascript
var request = new Ax(method, url, [data], [type], done);
```

#### Arguments

1. method *(String)*: http request (e.g., GET, PUT, POST, PATCH, DELETE, etc...)
2. url *(String)*: location/href 
3. [data] *(Object|JSON)*: required if uploading data to the server
4. [type] *(String)*: Content-Type header (default is application/json)
5. done *(Function)* Callback when request is finished, is always the *last argument* passed.

### Object Method

Similar approach, see [arguments](#arguments) above for explanation of values...

```javascript
var request = new Ax({
  method: method,
  url: url,
  data: [data],
  type: [type],
  done: done
}, [done]);
```
NOTE:  the *done* callback can either be in the first argument that is an object, or the *last* argument; but not both.  If a function is detected as the *last* argument, Ax will use that and ignore the other.

### Callback

The *done* callback function is passed as the *last* argument.

```javascript
var request = new Ax(...args, function (res, xhr, err) {
  // Single error detection
  if (err) {
    // Whoops lets do something
  }
  console.log('response is', res);
});
```

It may also be part of the options object

```javascript
var request = new Ax({
  ...options,
  done: function (res, xhr, err) {    
    if (err) console.error(err);
    console.log(res, xhr);
  }
});
```
## Examples

Get user data...

```javscript
var request = new Ax('GET', '/users/' + userid', function (res, xhr, err) {
  if (err) {
    // An error has occurred
  } else {
    var userdata = res;
    // Do something with user data.
  }
});
```

Update a user profile...
```javascript
var request = new Ax({
  method: 'PUT',
  url: userUrl,
  data: newData,,
  done: callBack()
});
```


Post a form...
```javscript
var request = new Ax('POST', '/submit/', formData, function (res, xhr, err) {
  if (err) {
    alert ('total failure', err);
  } else {
    console.log('server response is', res);
  }
});
```

## Installation
Installation can be as simple as an HTML ```<script>``` tag, or used with a UMD/AMD library like requirejs.  My personal favorite is usage with nodejs ;)

### Browser

```
<script src="ax.min.js"></script>
```



### NodeJS

Ax.js has been built with browserify, and works with both browserify and webpack.

Install via npm:

```
npm install axjs
```

*require* the module 
``` javascript
var Ax = require('axjs');
```

### CommonJS

Ax.js can be *required* in with a UMD or AMD library like requirejs.

``` javascript
var Ax = require('ax');
```

