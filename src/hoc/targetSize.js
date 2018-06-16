import React from 'react'
import TargetSize from 'components/TargetSize'

export default (
  config?: TConfig,
  mapStateToProps?: Function,
) => (WrappedComponent: any) => (props: TProps): any => {
  const { target, ...rest } = props || {}
  return (
    <TargetSize
      {...target}
      {...config}
      mapStateToProps={mapStateToProps}
    >
      <WrappedComponent {...rest} />
    </TargetSize>
  )
}
