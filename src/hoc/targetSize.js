import React from 'react'
import TargetSize from 'components/TargetSize'

export default (
  config?: TConfig,
  mapStateToProps?: Function,
) => (WrappedComponent: any) => (props: TProps): any => (
  <TargetSize
    {...config}
    mapStateToProps={mapStateToProps}
  >
    <WrappedComponent {...props} />
  </TargetSize>
)
