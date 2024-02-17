import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }
  return (//checkedはtrue,falseの判定
    <div>
        <label>
            <input type="checkbox" 
            checked={todo.completed} 
            readOnly
            onChange={handleTodoClick}
            />
        </label>
        {todo.name}
        </div>
  )
}

export default Todo