import React from 'react';

const Conditional = () => {
  const value = false 
  const returnValue = () => {
    return true
  }

  const showIt = () => {
    return(
      returnValue() ? 
        <div>Hello, it's true</div>
        :
        <div>It's false</div>
    )
  }

  return(
    <div>
      {
        // returnValue() ? 
        //   <div>Hello, it's true</div>
        //   :
        //   <div>It's false</div>

        showIt()
      }
    </div>
  )
}

export default Conditional;
