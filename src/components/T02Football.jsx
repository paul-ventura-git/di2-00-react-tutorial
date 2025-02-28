import React from 'react'

export default function Football() {
  const shoot = (a) => {
    alert(a)
  }

  return (
    <button onClick={()=>shoot("Creemos que se ha marcado un gol!")}>Football button!</button>
  )
}

