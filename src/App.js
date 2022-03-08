import React from "react";
import Todoitem from "./components/Todoitem";
import "./App.css";
import Input from "./components/Input";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.length < 1 && (
            <h1> It appears that you have nothing to do!</h1>
          )}
          {todoList.map((item) => (
            <Todoitem
              name={item.item}
              done={item.done}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
