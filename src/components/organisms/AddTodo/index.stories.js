import React from 'react'
import { storiesOf } from '@storybook/react'
import { AddTodo } from 'components'

storiesOf('AddTodo', module)
  .add('default', () => (
    <AddTodo />
  ))
  .add('reverse', () => (
    <AddTodo reverse />
  ))
