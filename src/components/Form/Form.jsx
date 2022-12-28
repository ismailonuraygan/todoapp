import React, { useState } from "react";
import { useTodoLayerValue } from "../../context/TodoContext";
import styles from "./index.module.scss";

const Form = () => {
  const [{}, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content && content.length < 1) return;
    const newTodo = {
      id: Math.floor(Math.random() * 134123412),
      content,
      isCompleted: false,
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        className={styles.todoInput}
        value={content}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
