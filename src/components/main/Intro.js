import React from "react";
import "../../App.css"


const Intro = () => {
  return (
    <div style={{marginTop:'50px'}} >
      <h1  className='name'>
        ЛАСКАВО ПРОСИМО
      </h1>
      <hr />
      <p style={{ textAlign: "center", color:'#111', fontSize:'18px' }}>
        Ми пропонуємо аргонне та полуавтоматичне зварювання за доступними цінами.
      </p>
    </div>
  );
};

export default Intro;
