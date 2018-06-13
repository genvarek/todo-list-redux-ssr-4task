import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ onAddTodo }) => {
  let input

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        onAddTodo(input.value)
        input.value = ''
      }}
      >
        <input type="text" ref={(node) => { input = node }} placeholder="input todo" />
        <button className="btn2" type="submit"> Add Todo </button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}


export default AddTodo
