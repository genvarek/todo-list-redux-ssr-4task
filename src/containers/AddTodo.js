import { connect } from 'react-redux'
import { addTodoRequest } from '../store/actions'
import dfghfdghdfghdfhg from '../components/organisms/AddTodo'

export const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(addTodoRequest(text)),
})

export default connect(null, mapDispatchToProps)(dfghfdghdfghdfhg)
