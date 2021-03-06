import React from 'react'
import PropTypes from 'prop-types'
import { Todo } from 'components'

const TodoList = ({
  todos, onTodoClick, onDeleteTodo, onGetTodo,
}) => (

  <div>
    <ul>
      {todos.map(todo =>
        (<div key={todo.id}>
          <Todo todo={todo} onClick={onTodoClick} />
          <button className="btn3" onClick={() => { onDeleteTodo(todo.id) }} >x</button>
         </div>))}
    </ul>
    <button className="btn" onClick={() => { onGetTodo() }}>Get Todos from API</button>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onGetTodo: PropTypes.func.isRequired,
}

export default TodoList
