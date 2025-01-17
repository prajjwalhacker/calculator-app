import './output.css';
import Circle from '../Circle/Circle';
import { useEffect, useRef } from 'react';

const Output = ({ setOutputPosition }) => {
  const ref = useRef<any>({});

  useEffect(() => {
     if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setOutputPosition({ x: rect.x, y: rect.y }); 
     }
  },[]);

  return (
    <div className='output-container'>
      <Circle ref={ref}/>  
      <input className='inner-output-main'/>
    </div>
  )
}

export default Output;