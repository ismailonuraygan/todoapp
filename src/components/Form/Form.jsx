import React, { useState } from "react";
import styles from "./index.module.scss";


const Form = () => {

  const [todo, setTodo] = useState({ id: "", content: "", isCompleted: false });
  async function createTodo(data) {
    try{
      fetch("https://630f2d283792563418893c3d.mockapi.io/todos", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }, 
        method: "POST"
      }).then(()=> {
        setTodo({title:"" , content:"", id:""})
      }).then(() => window.location.reload())
    }catch(err){
      console.log(err);
    }
  }

  const handleSubmit = async (data) => {
    try {
      createTodo(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={(e) => {e.preventDefault()
     handleSubmit(todo)}} className={styles.todoForm}>
      <input
        type="text"
        onChange={(e) => {
          setTodo({ ...todo, content: e.target.value });
        }}
        className={styles.todoInput}
        value={todo.content}
        placeholder="Add Todo"
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
