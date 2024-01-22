import { useState } from "react";
import TodoActions from "./TodoActions";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
// same as ApI
// const fakeTodos = [
//   { id: 1, title: "html5", completed: false },
//   { id: 2, title: "css3", completed: true },
//   { id: 3, title: "js", completed: false },
// ];
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  // function to add in textbox in form => (TodoForm)
  function handelTodoAdd(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }
  // function to handel the check in list =>(Todos file)
  function handelTodoEditCheck(id, newTodo) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return newTodo;
        } else return todo;
      });
    });
  }

  // function to handel the deleted in list => (Todos file)
  function handleDelete(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }
  function handel(completed){
    setTodos((todos)=>{
      return todos.filter((todo)=>todo.completed==completed)
    })
  }


  // to handel the progress => (TodoAction file)
  const length = todos.length;
  const filterComLen = todos.filter((todo) => todo.completed).length;

  // body of TodoApp components
  return (
    <div className="main-container">
      <TodoForm handelTodoAdd={handelTodoAdd}/>
      <TodoActions length={length} filterComLen={filterComLen} handel={handel} />
      <Todos
        todos={todos}
        handelTodoEditCheck={handelTodoEditCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoApp;
