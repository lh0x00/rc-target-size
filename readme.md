# about

[![npm version][npm-version-image]][npm-url]
[![npm downloads][npm-downloads-image]][npm-url]
[![github issues][github-issues-image]][github-issues-url]

a tool help get size of element for React, support higher-order component and component render.
you can get the size of the element using a row without changing any of the elements!

### require

```json
{
  "react": "^15.0.0",
  "react-dom": "^15.0.0"
}
```

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

```javascript
import React from 'react'
import { TargetSize } from 'rc-target-size'

const ResizeOfMe = ({ width, height }) => (
  <div>component - size of me: {width}x{height}</div>
)

const App = () => (
  <div>
    // simple
    <TargetSize>
      <ResizeOfMe />
    </TargetSize>

    // or use with config
    <TargetSize mode="debounce" rate={1000} handleHeight>
      <ResizeOfMe />
    </TargetSize>
  </div>
)

export default App

```

### hoc render

```javascript
import React from 'react'
import { targetSize } from 'rc-target-size'

const ResizeOfMeWrapped = ({ width, height }) => (
  <div>hoc - size of me: {width}x{height}</div>
)

// simple
const ResizeOfMe = targetSize()(ResizeOfMeWrapped)

// or use with config
const ResizeOfMe = targetSize({
  mode: 'debounce',
  rate: 1000,
  handleWidth: true,
})(ResizeOfMeWrapped)

const App = () => (
  <div>
    <ResizeOfMe />
  </div>
)

export default App
```

# documents

## config

| name      	| type   	| description                                                                                                            |
|-----------	|--------	|------------------------------------------------------------------------------------------------------------------------|
| mode      	| String 	| (optional) values is 'debounce' or 'throttle', mode refresh size of component when resize. default: 'throttle'         |
| rate      	| Number 	| (optional) rate refresh size of component when resize, measurement is milliseconds. default: 500                       |
| elementId 	| String 	| (optional) if you do not want to get the size of the current element, you can take another element. default: undefined |
| handleWidth | Boolean | (optional) only update value when width resized. default: false                                                        |
| handleHeight| Boolean	| (optional) only update value when height resized. default: false                                                       |


## props

values return to your components, append to props

| name      	| type    	| description                         	|
|-----------	|---------	|-------------------------------------	|
| width     	| Number  	| width of element                    	|
| height    	| Number  	| height of element                   	|
| canUseDOM 	| Boolean 	| the test was able to use DOM or not 	|

[npm-url]: https://npmjs.org/package/rc-target-size
[npm-version-image]: https://badge.fury.io/js/rc-target-size.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/rc-target-size.svg
[github-issues-image]: https://img.shields.io/github/issues/lamhieu-vk/rc-target-size.svg
[github-issues-url]: https://github.com/lamhieu-vk/rc-target-size/issues
