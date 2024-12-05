import { useState, createContext, useContext } from "react";

const MyContext = createContext();

export default function Component1() {            // LAYOUT
  const [user, setUser] = useState("Jesse Hall");
  // Wrapper
  return (
    <MyContext.Provider value={user}> 
      <h1>{`Hello ${user}!`}</h1>
      <Component2 nombreDeUsuario1={user} />
    </MyContext.Provider>
  );
}

function Component2(props) {  // HEADER
  return (
    <>
      <h1>Component 2 {props.nombreDeUsuario1}</h1>
      <Component3 nombreDeUsuario2={props.nombreDeUsuario1} />
    </>
  );
}

function Component3() {   // NAVBAR
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {   // AVATAR
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {   // BADGE "Nombre del usuario logueado"
  const user = useContext(MyContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}