import { useState } from 'react';
import './App.css'
import DynamicContainerCurve from './components/DyamicCurve/DyamicCurve'
import Function from './components/Function/Function'
import Input from './components/Input/Input'
import { v4 as uuidv4 } from "uuid";
import Output from './components/Output/Output';

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
       outputPosition: {x: 0, y: 0},
       nextFunctionIndex: 2,
       isFinal: false
       
    },
    {
       id: uuidv4(),
       equation: '',
       output: '',
       input: '',
       inputPosition: { x: 0, y: 0},
       outputPosition: {x: 0, y: 0},
       nextFunctionIndex: 4,
       isFinal: false
    }
    ,
    {
      id: uuidv4(),
      equation: '',
       output: '',
       input: '',
       inputPosition: { x: 0, y: 0},
       outputPosition: {x: 0, y: 0},
       nextFunctionIndex: 5,
       isFinal: false
    }
    ,
    {
      id: uuidv4(),
      equation: '',
       output: '',
       input: '',
       inputPosition: { x: 0, y: 0},
       outputPosition: {x: 0, y: 0},
       nextFunctionIndex: 3,
       isFinal: false
    }
    ,
    {
      id: uuidv4(),
      equation: '',
       output: '',
       input: '',
       inputPosition: { x: 0, y: 0},
       outputPosition: {x: 0, y: 0},
       isFinal: true
    }
  ]);


  return (
    <div className='main-container'>
      <Input setInputPosition={setInputPosition}/> 
      <DynamicContainerCurve startCoordinate={inputPosition} endCoordinate={functionArr[0].inputPosition}/>
      {
        (functionArr || []).map((item, index) => {
          return (
            <>
            <Function functionObj={item} key={index} setFunctionArr={setFunctionArr}/> 
            {index < functionArr?.length - 1 && <DynamicContainerCurve startCoordinate={functionArr[index].outputPosition} endCoordinate={functionArr[(item.nextFunctionIndex!)-1].inputPosition}/>}
            </>
          )
        })
      }
       <Output setOutputPosition={setOutputPosition}/>  
       <DynamicContainerCurve startCoordinate={functionArr[functionArr[functionArr?.length - 2].nextFunctionIndex!-1].outputPosition} endCoordinate={outputPosition}/>
    </div>
  )

}

export default App
