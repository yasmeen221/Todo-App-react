import { useState } from "react";

const TodoForm = (prpos) => {
  const { handelTodoAdd } = prpos;

  const [inpValue, setInpValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (inpValue.trim() === "") return;
    if (!inpValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      title: inpValue,
      completed: false,
    };
    handelTodoAdd(newTodo);
    setInpValue("");
  }
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <fieldset className="add-form__fieldset">
        <legend className="add-form__legend">Write a new todo item</legend>
        <input
          aria-label="Input for add new todo"
          placeholder="Add Todos Items"
          className="add-form__input"
          type="text"
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
        />
        <button className="btn btn--primary add-form__submit" type="submit">
          Add
        </button>
      </fieldset>
    </form>
  );
};
export default TodoForm;
