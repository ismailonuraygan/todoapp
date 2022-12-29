import React, { useState } from "react";
import clsx from "clsx";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import styles from "./index.module.scss";

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
    <div className={styles.todoRow}>
      <div className={content} onClick={() => setIsCompleted(!isCompleted)}>
        {todo.content}
      </div>
      <div
        className={styles.icons}
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        <DeleteIcon className={styles.delete} />
      </div>
    </div>
  );
};

export default Todo;
