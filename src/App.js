import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";//id一意に定める関数

//画面出力
function App() {
  //変数の管理監視
  //タスクが完了したかしてないか表示
  const[todos, setTodos] = useState([]);

const todoNameRef = useRef();

const handleAddTodo = () =>{
  //タスクを追加する
  const name = todoNameRef.current.value;
  if(name === ""){
    return
  }
  setTodos((prevTodos) => {
    return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
  })
  todoNameRef.current.value = null
  //console.log(todoNameRef.current.value);
}

//checkBoxの変更
//find関数はtrueのみを変数に代入
const toggleTodo = (id) => {
  const newTodos = [...todos]//todosをnewTodosにコピー
  const todo = newTodos.find((todo) => todo.id === id)
  todo.completed = !todo.completed
  setTodos(newTodos)//更新
}

//完了したタスクの削除
const handleClear = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos)
}

//filter関数はfalseのみを変数に代入
  return (
    <div>
      <TodoList todos={todos} toggleTodo = {toggleTodo} />
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
