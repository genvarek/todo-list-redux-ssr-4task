import React from 'react'
import { storiesOf } from '@storybook/react'
import { Todo } from 'components'

storiesOf('Todo', module)
  .add('default', () => (
    <Todo />
  ))
  .add('reverse', () => (
    <Todo reverse />
  ))
