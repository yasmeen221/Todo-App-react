import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

// component of edit and save one todo
const EditTodo = ({ todo, setIsEdited, handelTodoEditCheck }) => {
  const [editValue, setEditValue] = useState(todo.title);

  const handelSave = () => {
    setIsEdited(false);
    const newTodo = {
      ...todo,
      title: editValue,
    };
    handelTodoEditCheck(todo.id, newTodo);
  };
  return (
    <>
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        className="todo__input"
      />
      <button onClick={handelSave} className="save-btn">
        Save
      </button>
    </>
  );
};
// body of todo component
const TodoContent = ({
  todo,
  setIsEdited,
  handelTodoEditCheckClick,
  handleDelete,
}) => {
  return (
    <>
      <input
        className="todo__checkbox"
        id={`todo-${todo.id}`}
        type="checkbox"
        checked={todo.completed}
        onChange={handelTodoEditCheckClick}
      />
      <label className="todo__label " htmlFor={`todo-${todo.id}`}>
        {!handelTodoEditCheckClick ? (
          <span style={{ textDecoration: "line-through" }}>{todo.title}</span>
        ) : (
          // <span>{todo.title}</span>
          null
        )}
        {todo.title}
      </label>
      <button onClick={() => setIsEdited(true)} className="todo__edit-button">
        <BiEdit size="1.5em" color="var(--primary-color)" />
      </button>
      <button
        onClick={() => handleDelete(todo.id)}
        className="todo__delete-button"
      >
        <BiTrash size="1.5em" color="var(--red)" />
      </button>
    </>
  );
};

// component of one todo
const Todo = ({ todo, handelTodoEditCheck, handleDelete }) => {
  const [isEdited, setIsEdited] = useState(false);

  // // function to handel the check in list
  const handelTodoEditCheckClick = () => {
    handelTodoEditCheck(todo.id, {
      ...todo,
      completed: !todo.completed,
    });
  };

  // condition browser rendering => do condition return components
  return (
    <>
      <li className="todo">
        {isEdited ? (
          <EditTodo
            setIsEdited={setIsEdited}
            todo={todo}
            handelTodoEditCheck={handelTodoEditCheck}
          />
        ) : (
          <TodoContent
            setIsEdited={setIsEdited}
            todo={todo}
            handelTodoEditCheckClick={handelTodoEditCheckClick}
            handleDelete={handleDelete}
          />
        )}
      </li>
    </>
  );
};

// main components to show one todo and body
const Todos = ({ todos, handelTodoEditCheck, handleDelete }) => {
  return (
    <>
       {/* <h4 style={{marginTop:"40px"}}>Lets get Some Works Done!</h4> */}
    <ul className="todos">
      {todos.map((todo) => (
        <Todo
        key={todo.id}
        todo={todo}
        handelTodoEditCheck={handelTodoEditCheck}
        handleDelete={handleDelete}
        />
        ))}
    </ul>
        </>
  );
};

export default Todos;
