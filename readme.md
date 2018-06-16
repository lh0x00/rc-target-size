# about

[![npm version][npm-version-image]][npm-url]
[![npm downloads][npm-downloads-image]][npm-url]
[![github issues][github-issues-image]][github-issues-url]

a higher-order component to reduce render times quickly for lazy people like me!


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

const config = {
  mode: 'debounce',
  rate: 750,
}

const App = () => (
  <div>
    // or <TargetSize {...config}>
    <TargetSize>
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

const config = {
  mode: 'debounce',
  rate: 750,
}

// or const ResizeOfMe = targetSize(config)(ResizeOfMeWrapped)

const ResizeOfMe = targetSize()(ResizeOfMeWrapped)

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


## props

values return to your components, append to props

| name      	| type    	| description                         	|
|-----------	|---------	|-------------------------------------	|
| width     	| Number  	| width of element (your component)   	|
| height    	| Number  	| height of element (your component)  	|
| canUseDOM 	| Boolean 	| the test was able to use DOM or not 	|

[npm-url]: https://npmjs.org/package/rc-target-size
[npm-version-image]: https://badge.fury.io/js/rc-target-size.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/rc-target-size.svg
[github-issues-image]: https://img.shields.io/github/issues/lamhieu-vk/rc-target-size.svg
[github-issues-url]: https://github.com/lamhieu-vk/rc-target-size/issues
