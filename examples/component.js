/* eslint-disable */

import React from 'react'
import { TargetSize } from 'rc-target-size'

const ResizeOfMe = ({ width, height }) => (<div style={{ height: 100 }}>component - size of me: {width}x{height}</div>)

const App = () => (
  <div>
    <TargetSize>
      <ResizeOfMe />
    </TargetSize>
  </div>
)

export default App
