import React from 'react'
import Car from '../components/Car'

export default function Garage(props) {
  const v_marcaCarro2 = "Mercedes";

  return (
    <div>
      <h3>Who lives in my {props.tamanioGarage} garage?</h3>
      <Car marcaCarro={ v_marcaCarro2 }>::Car One::</Car>            
    </div>
  )
}
