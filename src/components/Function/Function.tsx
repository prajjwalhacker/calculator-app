import './function.css';
import dragAndDrag from '../../../src/assets/images/drag-and-drop.svg';
import Circle from '../Circle/Circle';
import { useEffect, useRef } from 'react';

const Function = ({ functionObj, setFunctionArr }) => {


  const inputCircleRef = useRef<any>(null);
  const outputCircleRef = useRef<any>(null);

  useEffect(() => {
      if (inputCircleRef.current) {
        const rect = inputCircleRef.current.getBoundingClientRect();

        console.log("rect");
        console.log(rect);
        const index = functionObj.id;
        setFunctionArr((prev: any) => {
           const newFunctionArr = [...prev];
           const reqIndex = newFunctionArr.findIndex((item) => item.id === index);
           newFunctionArr[reqIndex].inputPosition.x = rect.x;
           newFunctionArr[reqIndex].inputPosition.y = rect.y;
           return newFunctionArr;
        })
      }
      if (outputCircleRef.current) {
        const rect = outputCircleRef.current.getBoundingClientRect();
        console.log("Circle Position from Wrapper:", rect);
        const index = functionObj.id;
        setFunctionArr((prev: any) => {
          const newFunctionArr = [...prev];
          const reqIndex = newFunctionArr.findIndex((item) => item.id === index);
          newFunctionArr[reqIndex].outputPosition.x = rect.x;
          newFunctionArr[reqIndex].outputPosition.y = rect.y;
          return newFunctionArr;
       })
      }
  }, []);
  
  return (
    <div className="function-container">
        <div className='function-header'>
          <img src={dragAndDrag} alt='drag-and-drop'/>
          <div className='function-title'>
             Function: 1
          </div>
        </div>
        <div className='form-container'>
           <div className='form-group'>
             <label htmlFor="equation" className="form-label">Equation</label>   
             <div className='form-input'>
                <input />  
             </div>
           </div>
           <div className='form-group'>
             <label htmlFor="next-function" className="form-label">Next function</label>   
             <div className='form-input'>
                <input />  
             </div>
           </div>
        </div>  
        <div className='function-footer'>
           <div className='function-footer-item'>
             <Circle ref={inputCircleRef}/>  
              input
           </div>
           <div className='function-footer-item'>
             output
             <Circle ref={outputCircleRef}/> 
           </div>
        </div>
    </div>
  )
}

export default Function