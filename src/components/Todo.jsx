import React, { useState } from "react";
import {
  RiCloseCircleLine,
  RiCheckboxBlankCircleLine,
  RiCheckFill,
} from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";
// import TodoForm from './TodoForm';

function Todo({ todos, completeTodo, removeTodo, updateTodo, compArr }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  //   const compArr = [];
  console.log(compArr);
  //   console.log(object);
  return todos.map((todo, index) => {
    console.log(todo);
    // console.log(
    //   compArr.filter((e) => e.id == todo.id)[0]?.compTime?.getHours()
    // );
    return (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
        style={
          todo.id === compArr[compArr.length - 3]?.id
            ? { backgroundColor: "yellow" }
            : todo.id === compArr[compArr.length - 2]?.id
            ? { backgroundColor: "magenta" }
            : todo.id === compArr[compArr.length - 1]?.id
            ? { backgroundColor: "green" }
            : { backgroundColor: "grey" }
        }
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.isComplete ? (
            <RiCheckFill className="check" />
          ) : (
            <RiCheckboxBlankCircleLine className="icons" />
          )}
        </div>
        {todo.text}
        {/* {todo.compTime?.toString()} */}
        <div className="time">
          {todo.dateAdded.getHours() + ":" + todo.dateAdded.getMinutes()}
          {compArr.filter((e) => e.id == todo.id).length > 0 &&
            compArr.filter((e) => e.id == todo.id)[0]?.compTime?.getHours() +
              ":" +
              compArr.filter((e) => e.id == todo.id)[0]?.compTime?.getMinutes()}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="delete-icon"
          />
        </div>
      </div>
    );
  });
}

export default Todo;
