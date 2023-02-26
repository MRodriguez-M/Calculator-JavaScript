import React from "react";
import Button from "./Button";

const Calculator = () => {
    const buttonData = {
        "clear": "CLEAR",
        "divide": "/",
        "seven": "7",
        "eight": "8",
        "nine": "9",
        "multiply": "*",
        "four": "4",
        "five": "5",
        "six": "6",
        "subtract": "-",
        "one": "1",
        "two": "2",
        "three": "3",
        "add": "+",
        "zero": "0",
        "decimal": ".",
        "equals": "="  
    }

    return (
        <div id="calculator">
            <div id="display">display</div>
            <div id="buttons">
                {Object.keys(buttonData).map(buttonName => 
                        <Button buttonName={buttonName} key={buttonName} buttonKey={buttonData[buttonName]} />
                )}
            </div>
        </div>
    );
};

export default Calculator;