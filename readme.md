# about

[![npm version][npm-version-image]][npm-url]
[![npm downloads][npm-downloads-image]][npm-url]
[![github issues][github-issues-image]][github-issues-url]
[![build status][travis-image]][npm-url]

a tool help get size of element for React, support higher-order component and component render.
you can get the size of the element using a row without changing any of the elements!

### reference

#### rc-pure-component

a wrapper use pure component wrap stateless functional components to class use pure component to reduce re-render. [read more](https://www.npmjs.com/package/rc-pure-component)

#### resize-observer-polyfill

a polyfill for the resize observer api. [read more](https://www.npmjs.com/package/resize-observer-polyfill)

# install

```bash
# use npm
$ npm install rc-target-size

# or yarn
$ yarn add rc-target-size
```

# usage

### component render

[read more](https://github.com/lamhieu-vk/rc-target-size/blob/master/examples/component.js)

```javascript
import React from "react";
import { TargetSize } from "rc-target-size";

const ResizeOfMe = ({ width, height }) => (
  <div>
    component - size of me: {width}x{height}
  </div>
);

const onSize = data => console.log("onSize", data);

const App = () => (
  <div>
    // simple
    <TargetSize>
      <ResizeOfMe />
    </TargetSize>
    // or use with config
    <TargetSize mode="debounce" rate={1000} handleHeight onSize={onSize}>
      <ResizeOfMe />
    </TargetSize>
  </div>
);

export default App;
```

### hoc render

[read more](https://github.com/lamhieu-vk/rc-target-size/blob/master/examples/hoc.js)

```javascript
import React from "react";
import { targetSize } from "rc-target-size";

const ResizeOfMeWrapped = ({ width, height }) => (
  <div>
    hoc - size of me: {width}x{height}
  </div>
);

// simple
const ResizeOfMe = targetSize()(ResizeOfMeWrapped);

// or use with config
const ResizeOfMe = targetSize({
  mode: "debounce",
  rate: 1000,
  handleWidth: true,
  onSize: data => console.log("onSize", data),
})(ResizeOfMeWrapped);

const App = () => (
  <div>
    <ResizeOfMe />
  </div>
);

export default App;
```

### child function

[read more](https://github.com/lamhieu-vk/rc-target-size/blob/master/examples/childFunction.js)

```javascript
import React from "react";
import { TargetSize } from "rc-target-size";

const onSize = data => console.log("onSize", data);

const App = () => (
  <div>
    // simple
    <TargetSize>
      {({ width, height }) => (
        <div>
          child function - size of me: {width}x{height}
        </div>
      )}
    </TargetSize>
    // or use with config
    <TargetSize mode="debounce" rate={1000} handleHeight onSize={onSize}>
      {({ width, height }) => (
        <div>
          child function - size of me: {width}x{height}
        </div>
      )}
    </TargetSize>
  </div>
);

export default App;
```

# documents

## config

| name           | type    | description                                                                                                            |
| -------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| mode           | String  | (optional) values is 'debounce' or 'throttle', mode refresh size of component when resize. default: 'throttle'         |
| rate           | Number  | (optional) rate refresh size of component when resize, measurement is milliseconds. default: 500                       |
| elementId      | String  | (optional) if you do not want to get the size of the current element, you can take another element. default: undefined |
| handleWidth    | Boolean | (optional) only update value when width resized. default: false                                                        |
| handleHeight   | Boolean | (optional) only update value when height resized. default: false                                                       |
| handleOffset   | Boolean | (optional) only update value when offset changed. default: false                                                       |
| updateOnChange | Boolean | (optional) will received values since the initial creation? default: true                                              |
| onSize         | Func    | (optional) function callback on have size. default: undefined                                                          |

## props

values return to your components, append to props

| name      | type    | description                                |
| --------- | ------- | ------------------------------------------ |
| width     | Number  | width of element. default: 0               |
| height    | Number  | height of element. default: 0              |
| offset    | Object  | offset of element. default: { x: 0, y: 0 } |
| canUseDOM | Boolean | the test was able to use DOM or not        |

[npm-url]: https://npmjs.org/package/rc-target-size
[npm-version-image]: https://badge.fury.io/js/rc-target-size.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/rc-target-size.svg
[github-issues-image]: https://img.shields.io/github/issues/lamhieu-vk/rc-target-size.svg
[github-issues-url]: https://github.com/lamhieu-vk/rc-target-size/issues
[travis-image]: https://travis-ci.com/lamhieu-vk/rc-target-size.svg?branch=master
