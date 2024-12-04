import { useReducer } from "react"

// 1. Primer argumento del useReducer
const initialState = () => ({
  count: 0,
})

// 2. Segundo argumento del useReducer
// reducer recibe un STATE (objeto de javascript) y un ACTION (string)
const reducer = (state = initialState(), action = {}) => {
  if(action.type === 'INCREMENT'){
    return { count: state.count + 1 }
  }
}

export default function T15useReducer1 (props) {
  // STATE y DISPATCH es la manera local de denominar al INITIALSTATE(1) y a las funciones que define REDUCER(2)
  const [state, dispatch] = useReducer(reducer, initialState());

  // Función local (plantilla o contenedora) para implementar una determinada función de REDUCER
  const increment = () => dispatch({ type: 'INCREMENT'})

  return(
    <>
      <h2>El nuevo valor es: {state.count}</h2>
      <button onClick={increment}>Incrementar</button>
    </>
  )
}