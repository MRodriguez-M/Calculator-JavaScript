import React from "react";

const Button = (props) => {
    return (
        <button id={props.buttonName}>{props.buttonKey}</button>
    );
};

export default Button;