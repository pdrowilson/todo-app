const Todo = ({text, setTodos, todos, todo}) => {
  const deleteHandler = (e) => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }
  return (
    <div className="todo">
      <li className={`${todo.completed ? "completed" : ""}`} >{text}</li>
      <button  onClick={completeHandler} className="fas fa-check complete-btn"></button>
      <button onClick={deleteHandler} className="fas fa-trash trash-btn"></button>
    </div>
  )
}

export default Todo
