import React from 'react'
import Todo from "./Todo"

//rafceコンポーネント
const TodoList = ({ todos, toggleTodo}) => {
  return (
    todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo = {toggleTodo} />)//値の受け取り
  )
}

//TodoListのコンポーネントをエクスポート
export default TodoList