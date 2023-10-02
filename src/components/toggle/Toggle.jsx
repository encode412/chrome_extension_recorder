import React from "react";
import "./ToggleStyles.scss";

const Toggle = () => {
  return (
    <div>
      <label className='switch'>
        
        <input type='checkbox' />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default Toggle;
