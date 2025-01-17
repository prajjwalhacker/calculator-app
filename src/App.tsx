import { useState } from 'react';
import './App.css'
import DynamicContainerCurve from './components/DyamicCurve/DyamicCurve'
import Function from './components/Function/Function'
import Input from './components/Input/Input'
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputPosition, setInputPosition] = useState({});
  const [outputPosition,setOutputPosition] = useState({});
  const [functionArr, setFunctionArr] = useState([
    {
       id: uuidv4(),
       equation: '',
       output: '',
       input: '',
       inputPosition: { x: 0, y: 0},
       outputPosition: {x: 0, y: 0}
    },
    {
       id: uuidv4(),
       equation: '',
       output: '',
       input: '',
       inputPosition: { x: 0, y: 0},
       outputPosition: {x: 0, y: 0}
    }
    ,
    // {
      // id: uuidv4(),
    //   equation: '',
    //    output: '',
    //    input: '',
    //    inputPosition: { x: 0, y: 0},
    //    outputPosition: {x: 0, y: 0}
    // }
    // ,
    // {
    //   id: uuidv4(),
    //   equation: '',
    //    output: '',
    //    input: '',
    //    inputPosition: { x: 0, y: 0},
    //    outputPosition: {x: 0, y: 0}
    // }
    // ,
    // {
    //   id: uuidv4(),
    //   equation: '',
    //    output: '',
    //    input: '',
    //    inputPosition: { x: 0, y: 0},
    //    outputPosition: {x: 0, y: 0}
    // }
  ]);


  console.log("functionArr");
  console.log(functionArr);

  return (
    <>
      <Input setInputPosition={setInputPosition}/> 
      <DynamicContainerCurve startCoordinate={inputPosition} endCoordinate={functionArr[0].inputPosition}/>
      {
        (functionArr || []).map((item, index) => {
          return (
            <>
            <Function functionObj={item} key={index} setFunctionArr={setFunctionArr}/> 
            {index < functionArr?.length - 1 && <DynamicContainerCurve startCoordinate={functionArr[index].outputPosition} endCoordinate={functionArr[index+1].inputPosition}/>}
            </>
          )
        })
      }
    </>
  )

}

export default App
