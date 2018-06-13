import React from 'react'
import { storiesOf } from '@storybook/react'
import { TodoList } from 'components'

storiesOf('TodoList', module)
  .add('default', () => (
    <TodoList />
  ))
  .add('reverse', () => (
    <TodoList reverse />
  ))
