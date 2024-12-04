import { useState, createContext, useContext } from "react";

const MyContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("Jesse Hall");
  // Wrapper
  return (
    <MyContext.Provider value={user}> 
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </MyContext.Provider>
  );
}

function Component2(props) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(MyContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}