function TodoList({ todos, handleDelete }) {
  if (todos.length === 0) {
    return <p>Empty</p>;
  } else {
    return (
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.data().todos.Id}>
              {todo.data().todos.todoText}
              <span onClick={() => handleDelete(todo.data().todos.Id)}>X</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default TodoList;
