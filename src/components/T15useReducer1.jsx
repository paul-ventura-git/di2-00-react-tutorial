import { useReducer } from "react"

const initialState = () => ({
  count: 0,
})

const reducer = (state = initialState(), action = {}) => {
  if(action.type === 'INCREMENT'){
    return { count: state.count + 1 }
  }
}

export default function T15useReducer1 (props) {
  const [state, dispatch] = useReducer(reducer, initialState());

  // Función local (plantilla o contenedora) para implementar REDUCER
  const increment = () => dispatch({ type: 'INCREMENT'})

  return(
    <>
      <h1>El nuevo valor es: {state}</h1>
      <button onClick={increment}>Incrementar</button>
    </>
  )
}