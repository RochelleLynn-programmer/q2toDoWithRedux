import React from "react";
import NavBar from "../navbar/NavBar";
import { clearCompletedTodos } from "../../redux/actions/Actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Footer = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const countTodos = [...todos].filter((todo) => !todo.completed);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{countTodos.length}</strong> item(s) left.
      </span>
      <NavBar />
      <button onClick={() => dispatch(clearCompletedTodos())} className="clear-completed">
        Clear Completed
      </button>
    </footer>
  );
};

export default Footer;
