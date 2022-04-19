import React,{useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js"

function SushiContainer({arr}) {

  const[num1, setNum1]=useState(0)
  const[num2, setNum2]= useState(num1+3)
  const newArr = arr.filter((el)=>{
    return arr.indexOf(el)>=num1 && arr.indexOf(el)<=num2 
  })

  function handleClick(){
    setNum1(num1+3)
    setNum2(num2+3)

  }
  return (
    <div className="belt">
      
      {newArr.map((sushi)=>{
        return <Sushi key={sushi.id} sushi={sushi}/>

      })}
      <MoreButton handleClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
