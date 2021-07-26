import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/actions/Actions";

const ToDoItem = ({ id, completed, title }) => {
  const dispatch = useDispatch();
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={() => dispatch(toggleTodo(id))} />
        <label>{title}</label>
        <button className="destroy" onClick={() => dispatch(deleteTodo(id))} />
      </div>
    </li>
  );
};

export default ToDoItem;
