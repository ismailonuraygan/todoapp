import React from "react";
import clsx from "clsx";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTodoLayerValue } from "../../context/TodoContext";
import "./index.scss";

const Todo = ({ todo }) => {
  const [{}, dispatch] = useTodoLayerValue();

  const removeTodo = (todoId) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: todoId,
    });
  };
  const completeTodo = (todoId) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: todoId,
    });
  };

  const todoRow = clsx({
    ["todoRow"]: true,
    ["completed"]: todo.isCompleted
  })

  return (
    <div className={todoRow}>
      <div className="content" onClick={() => completeTodo(todo.id)}>
        {todo.content}
      </div>
      <div
        className="icons"
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        <DeleteIcon className="delete" />
      </div>
    </div>
  );
};

export default Todo;
