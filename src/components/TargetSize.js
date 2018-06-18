import React, { PureComponent, isValidElement, cloneElement } from 'react'
import { findDOMNode } from 'react-dom'
import ResizeObserver from 'resize-observer-polyfill'
import isFunction from 'lodash.isfunction'
import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'
import TargetReference from 'components/TargetReference'

const refreshMode = { debounce, throttle }

class TargetSize extends PureComponent<TProps, TState> {
  target: any = null // eslint-disable-line react/sort-comp

  element: any = null // eslint-disable-line react/sort-comp

  constructor(props) {
    super(props)

    const { mode = 'throttle', rate = 500 } = props || {}
    this.state = { canUseDOM: false, width: 0, height: 0 }

    const refreshHandler = refreshMode && refreshMode[mode]
    const resizeObserver =
      refreshHandler(this.createResizeObserver, rate) || this.createResizeObserver
    this.target = new ResizeObserver(resizeObserver)

    this.element = null
  }

  componentDidMount() {
    const resizableElement = this.getResizableElement()
    if (!this.target) return console.error('Can not found target element') // eslint-disable-line no-console
    this.target.observe(resizableElement)
    return true
  }

  componentWillUnmount() {
    const resizableElement = this.getResizableElement()
    if (!this.target) return console.error('Can not found target element') // eslint-disable-line no-console
    this.target.unobserve(resizableElement)
    return true
  }

  getResizableElement = () => {
    const { elementId } = this.props
    return elementId ? document.getElementById(elementId) : findDOMNode(this.element) // eslint-disable-line react/no-find-dom-node
  }

  getChildProps = () => {
    const { canUseDOM, width, height } = this.state
    const { mapStateToProps } = this.props

    const appendProps = isFunction(mapStateToProps) ? mapStateToProps(this.state) : {}

    return {
      canUseDOM,
      width,
      height,
      ...appendProps,
    }
  }

  createResizeObserver = (entries: any[]) => {
    const { width: prevWidth, height: prevHeight } = this.state
    const { handleWidth = false, handleHeight = false } = this.props
    entries.forEach((entry) => {
      const { width: nextWidth, height: nextHeight } = entry.contentRect

      const handleAll = (!handleWidth && !handleHeight)
      const isResizedWidth = Math.floor(prevWidth) !== Math.floor(nextWidth)
      const isResizedHeight = Math.floor(prevHeight) !== Math.floor(nextHeight)

      const shouldUpdateWidth = (handleAll || handleWidth) && isResizedWidth
      const shouldUpdateHeight = (handleAll || handleHeight) && isResizedHeight

      if (shouldUpdateWidth || shouldUpdateHeight) {
        this.setState({ canUseDOM: true, width: nextWidth, height: nextHeight })
      }
    })
  }

  createRef = (el: any) => {
    this.element = el
  }

  render() {
    const { children } = this.props

    const isFunctional = isFunction(children)
    const isComponent = isValidElement(children)

    if (!isFunctional && !isComponent) return children

    const childProps = this.getChildProps()
    const component = isFunctional
      ? cloneElement(children(childProps))
      : cloneElement(children, childProps)

    return <TargetReference ref={this.createRef}>{component}</TargetReference>
  }
}

export default TargetSize
