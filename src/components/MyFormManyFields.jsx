import { useState } from 'react'
import React from 'react'

export default function MyFormManyFields() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const v_name = event.target.name;
    const v_value = event.target.value;
    setInputs(values => ({...values, [v_name]: v_value})); // {name: "valor1", value: "valor2"}
    console.log(inputs);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Soy " + inputs.username + " y tengo " + inputs.age + " años.");
  }

  return (
    <form onSubmit={handleSubmit} style={{padding:"10px"}}>
      <label>Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your age:
        <input
          type='number'
          name='age'
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit"/>
    </form>
  )
}

