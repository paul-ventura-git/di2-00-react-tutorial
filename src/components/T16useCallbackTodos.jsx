import { memo } from "react";

// "Template (esqueleto) con memoria"
// No defino aquí ni TODOS ni ADDTODO
const Todos = ({ todos, addTodo }) => {
  console.log("Ejemplo 16 - Se re-renderizó el componente Todos (hijo)");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);