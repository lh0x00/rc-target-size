/* eslint-disable */

import React from 'react'
import { targetSize } from 'rc-target-size'

const ResizeOfMeWrapped = ({ width, height }) => (<div>hoc - size of me: {width}x{height}</div>)

const ResizeOfMe = targetSize()(ResizeOfMeWrapped)

const App = () => (
  <div>
    <div style={{ height: '100%', width: '100%' }}>
      <ResizeOfMe />
    </div>

    <div style={{ height: '100%', width: 250 }}>
      <ResizeOfMe />
    </div>

    <div style={{ height: '100%', width: 500 }}>
      <ResizeOfMe />
    </div>

    <div style={{ height: '100%', width: 750 }}>
      <ResizeOfMe />
    </div>
  </div>
)

export default App
