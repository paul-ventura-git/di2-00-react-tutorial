import React from 'react'
import Car from './T01Car'

export default function Garage(props) {
  const v_marcaCarro1 = "Mercedes";
  const v_colorCarro1 = "Violeta"

  return (
    <div>
      <h3> ¿Quién vive en mi garage {props.tamanioGarage} ?</h3>
      <Car marcaCarro={ v_marcaCarro1 } colorCarro={v_colorCarro1}>::Car One::</Car>  
      <Car marcaCarro="Nissan" colorCarro="Plata">::Car Two::</Car>          
    </div>
  )
}
