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
  const [inputValue, setInputValue] = useState(2);
  const [functionArr, setFunctionArr] = useState([
    {
       id: uuidv4(),
       equation: 'x^2',
       output: '',
       input: '',
       inputPosition: { x: 0, y: 0},
       outputPosition: {x: 0, y: 0},
       nextFunctionIndex: 2,
       isFinal: false,
       isStart: true
    },
    {
       id: uuidv4(),
       equation: '2*x',
       output: '',
       input: '',
       inputPosition: { x: 0, y: 0},
       outputPosition: {x: 0, y: 0},
       nextFunctionIndex: 4,
       isFinal: false,
       isStart: false
    }
    ,
    {
      id: uuidv4(),
      equation: 'x/2',
       output: '',
       input: '',
       inputPosition: { x: 0, y: 0},
       outputPosition: {x: 0, y: 0},
       nextFunctionIndex: -1,
       isFinal: true,
       isStart: false
    }
    ,
    {
       id: uuidv4(),
       equation: '4*x',
       output: '',
       input: '',
       inputPosition: { x: 0, y: 0},
       outputPosition: {x: 0, y: 0},
       nextFunctionIndex: 5,
       isFinal: false,
       isStart: false
    },
    {
      id: uuidv4(),
      equation: 'x^3',
      output: '',
      input: '',
      inputPosition: { x: 0, y: 0},
      outputPosition: {x: 0, y: 0},
      nextFunctionIndex: 3,
      isStart: false
    }
  ]);


  return (
    <div className='main-container'>
      <Input setInputPosition={setInputPosition} inputValue={inputValue} setInputValue={setInputValue}/> 
      <DynamicContainerCurve startCoordinate={inputPosition} endCoordinate={functionArr[0].inputPosition}/>
      {
        (functionArr || []).map((item, index) => {
          return (
            <>
            <Function functionObj={item} key={index} setFunctionArr={setFunctionArr}/> 
            {item.nextFunctionIndex !== -1 && <DynamicContainerCurve startCoordinate={functionArr[index].outputPosition} endCoordinate={functionArr[(item?.nextFunctionIndex!)-1]?.inputPosition}/>}
            </>
          )
        })
      }
       <Output setOutputPosition={setOutputPosition}/>  
       <DynamicContainerCurve startCoordinate={functionArr.filter((item => item.isFinal))?.[0]?.outputPosition} endCoordinate={outputPosition}/>
    </div>
  )

}

export default App
