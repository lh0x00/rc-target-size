import pure from 'rc-pure-component'

const TargetReference = ({ children }: { children: any }): any => children

const TargetWrapper = pure(TargetReference)
TargetWrapper.displayName = 'TargetWrapper'

export default TargetWrapper
