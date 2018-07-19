/* eslint-disable */

import React from 'react'
import { targetSize } from 'rc-target-size'

const ResizeOfMeWrapped = ({ width, height }) => (
  <div style={{ height: 100 }}>
    hoc - size of me: {width}x{height}
  </div>
)

const ResizeOfMe = targetSize()(ResizeOfMeWrapped)

const App = () => (
  <div>
    <ResizeOfMe />
  </div>
)

export default App
