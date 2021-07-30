import React from 'react'
import './App.css';
function CheckPassword(props) {
    let strengthValue = {
        'caps': false,
        'length': false,
        'special': false,
        'numbers': false,
        'small': false
      };

let password = props.pass;
let score = 0;
for(let index=0; index < password.length; index++) {
  let char = password.charCodeAt(index);
  if(!strengthValue.caps && char >= 65 && char <= 90) {
      strengthValue.caps = true;
      score++;
  } else if(!strengthValue.small && char >=97 && char <= 122){
    strengthValue.small = true;
    score++;
  } else if(!strengthValue.numbers && char >=48 && char <= 57){
    strengthValue.numbers = true;
    score++;
  } else if(((!strengthValue.special) && (char >=33 && char <= 47)) || (char >=58 && char <= 64)) {
    strengthValue.special = true;
    score++;
  }
}
    let classStrength = 'Weak';
    if (score === 4){
        classStrength = 'Strong';
    }else if (score >= 2){
        classStrength = 'Moderate';
    }



    return (
        <div className='container'>
            <div className='strength'>{classStrength}</div>
            <div className={classStrength}>
            </div>
        </div>
    )
}

export default CheckPassword
