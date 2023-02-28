import React from "react";

const Button = (props) => {
    return (
        <button id={props.buttonName} onClick={() => props.handleClick(props.buttonSymbol)}>{props.buttonSymbol}</button>
    );
};

export default Button;