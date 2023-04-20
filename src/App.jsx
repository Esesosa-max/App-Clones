import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import useLocal from "./useLocal.js";
import { db } from "./firebase.js";
import { setDoc } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
function App() {
  const [input, setInput] = useState();
  const [todos, setTodos] = useState([]);
  useLocal(todos, setTodos);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let Id = crypto.randomUUID();

    await setDoc(doc(db, "todos", Id), {
      todos: { todoText: input, Id },
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo handleSubmit={handleSubmit} setInput={setInput} />
      {todos && <TodoList todos={todos} handleDelete={handleDelete} />}
    </div>
  );
}

export default App;
