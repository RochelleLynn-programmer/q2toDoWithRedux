import React from "react";
import NoButtonItem from "../nobuttonitem/NoButtonItem";
import { useSelector } from "react-redux";

const Completed = () => {
  const todos = useSelector((state) => state);

  const completeTodos = [...todos].filter((todo) => todo.completed);

  return (
    <>
      <section className="main">
        <ul className="todo-list">
          {completeTodos.map((completeTodo) => (
            <NoButtonItem
              todo={completeTodo}
              key={completeTodo.id}
              id={completeTodo.id}
              title={completeTodo.title}
              completed={completeTodo.completed}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Completed;
