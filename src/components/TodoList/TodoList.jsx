import React from "react";
import Todo from "../Todo/Todo";
import styles from "./index.module.scss";

const TodoList = ({ todos }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
};

export default TodoList;
