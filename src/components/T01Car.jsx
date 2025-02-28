import React from 'react'

/**
 * Aquí definimos:
 * La posición de los props,
 * El identificador de cada prop
 * @param {*} props 
 * @returns 
 */
export default function Car(props) {
  return (
    <>
      <h3>¡Hola, soy un {props.marcaCarro} {props.colorCarro} !</h3>
    </>
  )
}


