/* eslint-disable */

import React from 'react'
import { TargetSize } from 'rc-target-size'

const ResizeOfMe = ({ width, height }) => (<div>component - size of me: {width}x{height}</div>)

const App = () => (
  <div>
    <div style={{ height: '100%', width: '100%' }}>
      <TargetSize>
        <ResizeOfMe />
      </TargetSize>
    </div>

    <div style={{ height: '100%', width: 250 }}>
      <TargetSize>
        <ResizeOfMe />
      </TargetSize>
    </div>

    <div style={{ height: '100%', width: 500 }}>
      <TargetSize>
        <ResizeOfMe />
      </TargetSize>
    </div>

    <div style={{ height: '100%', width: 750 }}>
      <TargetSize>
        <ResizeOfMe />
      </TargetSize>
    </div>
  </div>
)

export default App
