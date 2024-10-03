import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './Todo.css';  

export default function TodoV2() {
  const [todos, setTodo] = useState([
    {
      task: "New Task",
      id: uuidv4(),
      done: false,
      important: false,
    },
  ]);
  
  const [newTodoInp, setNewTodoInp] = useState("");

  // Function to add a new task
  const addNewTask = () => {
    if (newTodoInp.trim() === "") return; // Prevent adding empty tasks
    setTodo((prevTodo) => [
      ...prevTodo, 
      { task: newTodoInp, id: uuidv4(), done: false, important: false }
    ]);
    setNewTodoInp(""); // Reset input after adding
  };

  // Update the input value for new tasks
  const updateTodoValue = (event) => {
    setNewTodoInp(event.target.value);
  };

  // Delete a task
  const todoDelete = (id) => {
    setTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Delete all tasks
  const DeleteAll = () => {
    setTodo(() => []);
  };

  // Mark a task as "Important" and move it to the top
  const markAsImportant = (id) => {
    setTodo((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, important: true, task: todo.task.toUpperCase() } // Set important and uppercase
          : todo
      );

      const importantTodo = updatedTodos.find((todo) => todo.id === id);
      const otherTodos = updatedTodos.filter((todo) => todo.id !== id);

      return [importantTodo, ...otherTodos]; // Move important task to the top
    });
  };

  // Mark a task as done
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

  // Apply line-through styling to tasks that are marked as done
  const lineThrough = (done) => {
    return done ? "line-through" : "none";
  };

  return (
    <div className="todo-app">
      <h1 className="todo-title">Todo App</h1>

      <div className="todo-input-section">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodoInp}
          onChange={updateTodoValue}
          className="todo-input"
        />
        <button onClick={addNewTask} className="todo-button">Submit</button>
      </div>

      <hr />

      <h4 className="centerH4">Tasks List</h4>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            className="todo-item"
            style={{
              backgroundColor: todo.important ? 'red' : 'transparent',
              color: todo.important ? 'white' : 'black',
            }}
          >
            <span
              style={{ 
                textDecoration: lineThrough(todo.done), 
                fontWeight: todo.important ? "bold" : "normal",
                color: todo.important ? 'white' : 'black' // Ensure text color is white for important tasks
              }}
            >
              {todo.task}
            </span>
            <div className="todo-actions" style={{ display: 'flex', gap: '10px' }}> {/* Add gap between buttons */}
              <button onClick={() => markAsImportant(todo.id)}>
                Mark as Important
              </button>
              <button onClick={() => markAsDone(todo.id)}>
                {todo.done ? "Undo" : "Mark as Done"}
              </button>
              <button onClick={() => todoDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      
      <button onClick={DeleteAll} className="uppercase-all-button">Delete All</button>
    </div>
  );
}
