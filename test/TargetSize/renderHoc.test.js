/* eslint-disable */

import React from 'react'
import { mount, shallow } from 'enzyme'
import targetSize from 'hoc/targetSize'
import { result } from 'test/TargetSize/data'

describe('TargetSize - render hoc', () => {
  const Wrapped = ({ width, height }) => <div>{result.text}</div>

  const Component = targetSize()(Wrapped)

  it('have wrappers', () => {
    const component = mount(<Component />)
    expect(component.exists('TargetSize')).toEqual(true)
    expect(component.exists('TargetWrapper')).toEqual(true)
    expect(component.exists('TargetReference')).toEqual(true)
    expect(component.exists('Wrapped')).toEqual(true)
  })

  it('render content', () => {
    const component = mount(<Component />)
    expect(component.text()).toEqual(result.text)
  })

  it('have props', () => {
    const component = mount(<Component />)
    expect(component.find('Wrapped').props()).toEqual(result.props)
  })

  it('render in server-side', () => {
    const component = shallow(<Component />)
    expect(component.html()).toEqual(result.html)
  })
})
