import TodoCell from 'src/components/TodoCell'

const TodoPage = ({id}) => {
  return (
    <div>
      <h1>TodoPage</h1>
      <TodoCell id={id} />
    </div>
  )
}

export default TodoPage
