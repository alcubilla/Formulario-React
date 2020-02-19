import React from 'react'

const Button = (props) => {
    return ( 
        <div>
        <button 
        className="btn btn-primary"
        onClick={props.action}>
            {props.title}
        </button>
        </div>
     );
}
 
export default Button;