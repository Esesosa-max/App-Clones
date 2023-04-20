function AddTodo({ handleSubmit, setInput }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}

export default AddTodo;
