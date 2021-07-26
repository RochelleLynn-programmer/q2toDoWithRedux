import React from "react";
import NoButtonItem from "../nobuttonitem/NoButtonItem";
import { useSelector } from "react-redux";

const Active = () => {
  const todos = useSelector((state) => state);

  const activeTodos = [...todos].filter((todo) => !todo.completed);

  return (
    <>
      <section className="main">
        <ul className="todo-list">
          {activeTodos.map((activeTodo) => (
            <NoButtonItem key={activeTodo.id} id={activeTodo.id} title={activeTodo.title} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Active;
