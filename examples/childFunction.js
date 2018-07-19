/* eslint-disable */

import React from 'react'
import { TargetSize } from 'rc-target-size'

const App = () => (
  <div>
    <TargetSize>
      {({ width, height }) => (
        <div style={{ height: 100 }}>
          callback - size of me: {width}x{height}
        </div>
      )}
    </TargetSize>
  </div>
)

export default App
