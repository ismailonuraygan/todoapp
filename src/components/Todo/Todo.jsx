import React, { useState } from "react";
import clsx from "clsx";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import "./index.scss";

const Todo = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleDelete = (id) => {
    axios
      .delete(`https://630f2d283792563418893c3d.mockapi.io/todos/${id}`)
      .then(() => window.location.reload());
    console.log("deleted");
  };

  const content = clsx({
    ["content"]: true,
    ["completed"]: isCompleted,
  });

  return (
    <div className={"todoRow"}>
      <div className={content} onClick={() => setIsCompleted(!isCompleted)}>
        {todo.content}
      </div>
      <div
        className="icons"
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        <DeleteIcon className="delete" />
      </div>
    </div>
  );
};

export default Todo;
