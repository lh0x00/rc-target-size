/* @flow */

import React from 'react'
import TargetSize from 'components/TargetSize'

export default (
  config?: TConfig,
  mapStateToProps?: Function,
) => (WrappedComponent: any) => {
  WrappedComponent.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component' // eslint-disable-line no-param-reassign

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
