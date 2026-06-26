import { useState, useMemo } from "react";

const T17useMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // Envolvemos con USEMEMO nuestro cálculo pesado sobre nuestro ESTADO COUNT
  // para que no se vuelva a ejecutar cada vez que se renderice el componente
  // El segundo argumento de useMemo es un array de dependencias, que indica cuándo debe
  // volver a calcular el valor memorizado. En este caso, solo cuando 'count' cambie.
  // Si no se proporciona, se calculará en cada renderizado.
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "Nueva tarea agregada"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default T17useMemo;