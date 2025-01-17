import './circle.css';

import { forwardRef } from 'react';

const Circle = ({}, ref) => {


  return (
    <div className='circle' ref={ref}>
    <div className='inner-circle'>
    </div> 
  </div> 
  )
}

export default forwardRef(Circle);