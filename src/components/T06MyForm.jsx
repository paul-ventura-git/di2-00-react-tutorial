import React from 'react'
import { useState } from 'react';

export default function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
    /*
    const node = document.createElement("div");
    const textnode = document.createTextNode(name);
    node.appendChild(textnode);
    document.getElementById("filler").appendChild(node);
    */
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{padding:"10px"}}>
        <label> Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => {setName(e.target.value); console.log(name)}}
          >
          </input>
        </label>
        <input type="submit"/>
      </form>
      <p id="filler"></p>
    </>
  )
}