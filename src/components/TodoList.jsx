import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [color, setColor] = useState("red");
  const [compArr, setCompArr] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      //   console.log('This will run after 1 second!')
      setColor("black");
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodo = [...todos, todo];

    setTodos(newTodo);
    // console.log(...todos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //   const compDate = new Date();
  //   const compArr = [];

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        setCompArr((prev) => [...prev, { ...todo, compTime: new Date() }]);
      }
      return todo;
    });

    setTodos(updatedTodos);
  };
  //   console.log(compArr);

  return (
    <div>
      <h1 className="title-todo">todos</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        id="text"
        compArr={compArr}
      />
    </div>
  );
}

export default TodoList;
