import { useState } from "react";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../redux/actions/Actions";
import { useDispatch } from "react-redux";

const Header = () => {
  const [text, setText] = useState("");
  const newID = uuid();
  const dispatch = useDispatch();

  const updateText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <header className="header">
      <h1>ToDos</h1>
      <input
        className="new-todo"
        onChange={updateText}
        onKeyDown={(e) => {
          if (e.which === 13) {
            dispatch(
              addTodo({
                userId: 1,
                id: newID,
                title: text,
                completed: false,
              }),
            );
            setText("");
          }
        }}
        placeholder="What needs to be done?"
        autoFocus
        value={text}
      />
    </header>
  );
};

export default Header;
