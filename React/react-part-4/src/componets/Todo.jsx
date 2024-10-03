import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const [todos, setTodo] = useState([
    {
      task: "New Task",
      id: uuidv4(),
      done: false,
    },
  ]);
  const [newTodoInp, setNewTodoInp] = useState("");

  let addNewTask = () => {
    setTodo((prevTodo) => {
      return [...prevTodo, { task: newTodoInp, id: uuidv4(), done: false }];
    });
    setNewTodoInp("");
  };

  function updateTodoValue(event) {
    setNewTodoInp(event.target.value);
  }

  function todoDelete(id) {
    setTodo((prevTodo) => todos.filter((prevTodo) => prevTodo.id !== id));
  }

  function upperCaseAll() {
    // update all in array
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  }

  function upperCaseOne(id) {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  }

  const markAsDone = (id) => {
    setTodo((prevTodos) => {
      let updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );

      // Find the item that was toggled and move it to the end if done
      const toggledTodo = updatedTodos.find(todo => todo.id === id);

      // Remove the toggled item from its current position and append it to the end
      if (toggledTodo && toggledTodo.done) {
        updatedTodos = updatedTodos.filter(todo => todo.id !== id);
        updatedTodos.push({ ...toggledTodo, important: false }); // Ensure it's not marked important anymore
      }

      return updatedTodos;
    });
  };


  function lineTrough(done) {
    return done ? { textDecoration: "line-through" } : {textDecoration: "none"};
  }

  return (
    <div>
      <p>Todo App</p>
      <input
        placeholder="Add the Task"
        value={newTodoInp}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <br></br>
      <button onClick={addNewTask}>Submit</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} >
            <span style={lineTrough(todo.done)}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => todoDelete(todo.id)}>Delete</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>UpperCaseOne</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)  }>{todo.done ? "Undo" : "Mark as Done"}</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </div>
  );
}
