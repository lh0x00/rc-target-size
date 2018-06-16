import React, { PureComponent, isValidElement, cloneElement } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import isFunction from 'lodash.isfunction'
import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'
import { DEFAULT_PROPS } from 'lib/enums'

const refreshMode = { debounce, throttle }

class TargetSize extends PureComponent<TProps, TState> {
  constructor(props) {
    super(props)

    // get config values
    const { mode = 'throttle', rate = 500 } = props || {}

    // set default state
    this.state = { canUseDOM: false, width: 0, height: 0 }

    // create resize observerr
    const resizeObserver =
      (refreshMode[mode] && refreshMode[mode](this.createResizeObserver, rate)) ||
      this.createResizeObserver

    // create target
    this.target = new ResizeObserver(resizeObserver)

    // create object element
    this.element = {}
  }

  componentDidMount() {
    const resizableElement = this.getResizableElement()
    if (!this.target) return console.error('Can not found target element') // eslint-disable-line
    return this.target.observe(resizableElement)
  }

  componentWillUnmount() {
    const resizableElement = this.getResizableElement()
    if (!this.target) return console.error('Can not found target element') // eslint-disable-line
    return this.target.unobserve(resizableElement)
  }

  getResizableElement = () => {
    const { elementId } = this.props
    return elementId && document ? document.getElementById(elementId) : this.element
  }

  getChildProps = () => {
    const { canUseDOM, width, height } = this.state
    const { mapStateToProps } = this.props

    // map state to props, append to props component
    const appendProps = isFunction(mapStateToProps) ? mapStateToProps(this.state) : {}

    return {
      canUseDOM, width, height, ...appendProps,
    }
  }

  getTargetProps = () => Object.keys(this.props || {}).reduce(
    (acc, key) => (!DEFAULT_PROPS.includes(key) ? { ...acc, [key]: this.props[key] } : acc),
    {},
  )

  createResizeObserver = (entries) => {
    const { width: prevWidth, height: prevHeight } = this.state
    entries.forEach((entry) => {
      const { width: nextWidth, height: nextHeight } = entry.contentRect

      // use Math.floor to reduce re-render component
      const isChangedWidth = Math.floor(prevWidth) !== Math.floor(nextWidth)
      const isChangedHeight = Math.floor(prevHeight) !== Math.floor(nextHeight)

      // size is changed?
      if (isChangedWidth || isChangedHeight) {
        // set new size to state
        this.setState({ canUseDOM: true, width: nextWidth, height: nextHeight })
      }
    })
  }

  createRef = (el) => {
    this.element = el
  }

  render() {
    const { children, tag } = this.props

    const isFunctional = isFunction(children)
    const isComponent = isValidElement(children)

    // if not in support list, return children
    if (!isFunctional && !isComponent) return children

    // map state to props
    const childProps = this.getChildProps()

    // clone component, append sizes to component
    const component = isFunctional ?
      cloneElement(children(childProps)) : cloneElement(children, childProps)

    // set tag
    const Tag = tag || 'div'

    // get props for target
    const targetProps = this.getTargetProps()

    return (
      <Tag ref={this.createRef} {...targetProps}>{component}</Tag>
    )
  }
}

export default TargetSize
