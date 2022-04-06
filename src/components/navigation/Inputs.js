import React from 'react';

const Inputs = (props) => {
    return (
            <div className={props.className}>
                <label>{props.label}
                    <input className={props.inputClass} type={props.type} name={props.name}
                           placeholder={props.placeholder} accept={props.accept}/>
                </label>
            </div>
    );
}

export default Inputs;