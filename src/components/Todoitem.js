import React from "react";
import "./Todoitem.css";
import Checkbox from "@mui/material/Checkbox";

import { useDispatch } from "react-redux";
import { setCheck, deleteTodo } from "../features/todoSlice";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Todoitem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        {...label}
      />
      <p className={done && "todoItem--done"}>{name}</p>
      <button className="delete-btn" onClick={handleDelete}>
        &#10006;
      </button>
    </div>
  );
};

export default Todoitem;
