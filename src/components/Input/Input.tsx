import './input.css';
import Circle from '../Circle/Circle';
import { useEffect, useRef } from 'react';

const Input = ({ setInputPosition }) => {
  const ref = useRef<any>({});

  useEffect(() => {
     if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setInputPosition({ x: rect.x, y: rect.y }); 
     }
  },[]);

  return (
    <div className='input-container'>
      <input className='inner-input-main'/>
      <Circle ref={ref}/>  
    </div>
  )
}

export default Input