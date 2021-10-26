import React from "react";
export const TodoListItem = ({
  todo,
  index,
  handleDeleteTodo,
  handleToggleTodo,
}) => {
  return (
    <li key={todo.id} className="list-group-item">
      <div onClick={() => handleToggleTodo(todo, index)}>
        {todo.done ? (
          <strike>
            {index + 1}. {todo.desc}
          </strike>
        ) : (
          <p>
            {index + 1}. {todo.desc}
          </p>
        )}
      </div>

      <button
        className="btn btn-danger"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
