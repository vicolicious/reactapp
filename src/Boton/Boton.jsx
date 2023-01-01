import { useState } from "react";

export default function Boton(){
  const [colorState, setColorState] = useState('red');
let style ={
  backgroundColor : 'green'
}

  function styleColor(evt){
    setColorState = ('blue')
  }


  return(
    <button onClick={styleColor} style={style}>Click</button>
  )
}
