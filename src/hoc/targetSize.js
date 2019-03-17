/* @flow */

import React from 'react'
import TargetSize from 'components/TargetSize'

export default (
  config?: TConfig,
  mapStateToProps?: Function,
) => (WrappedComponent: any) => {
  // eslint-disable-next-line no-param-reassign, max-len
  WrappedComponent.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const TargetContainer = (props: TProps): any => (
    <TargetSize
      {...config}
      mapStateToProps={mapStateToProps}
    >
      <WrappedComponent {...props} />
    </TargetSize>
  )
  return TargetContainer
}
