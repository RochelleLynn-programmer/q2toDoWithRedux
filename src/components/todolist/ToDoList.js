import React from "react";
import ToDoItem from "../todoitem/ToDoItem";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const todos = useSelector((state) => state);

  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDoItem todo={todo} key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
        ))}
      </ul>
    </section>
  );
};

export default ToDoList;
