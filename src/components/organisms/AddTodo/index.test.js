import React from 'react'
import { shallow } from 'enzyme'
import AddTodo from '.'

const wrap = (props = {}) => shallow(<AddTodo {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
