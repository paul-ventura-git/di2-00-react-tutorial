import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Ir al banco",
    complete: false,
  },
  {
    id: 2,
    title: "Gimnasio",
    complete: false,
  },
  {
    id: 3,
    title: "Comprar pan",
    complete: false,
  },
  {
    id: 4,
    title: "Llevar el coche al taller",
    complete: true,
  },
  {
    id: 5,
    title: "Hacer la compra",
    complete: false,
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETAR-TAREA":
      // Mapear todos los TODOs y cambiar el atributo COMPLETE de TODO modificado en la interfaz
      return state.map((todo) => {
        if (todo.id === action.id) {
          console.log("Mensaje del REDUCER: ", todo.complete);
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function T15useReducer() {
  // REDUCER se encargará de actualizar el atributo COMPLETE de los TODOS
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  // El HANDLECOMPLETE dispara la ejecución del USEREDUCER con DISPATCH
  // le pasa el atributo TYPE de ACTION
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETAR-TAREA", id: todo.id });
    console.log("Mensaje del DISPATCH:", todo.title);
  };

  return (
    <div style={{border: "1px solid black", padding: "10px", backgroundColor: "lightgreen"}}>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
            
          </label>
          {todo.complete}
        </div>
      ))}
    </div>
  );
}