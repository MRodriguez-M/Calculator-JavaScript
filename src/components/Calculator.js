import React, { useState } from "react";
import Button from "./Button";

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

const Calculator = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('0');

    const handleClick = (buttonSymbol) => {
        switch(buttonSymbol) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                setInput(input + buttonSymbol);
                break;
            case "0":
                setInput(input + buttonSymbol);
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                setInput(input + buttonSymbol);
                break;
            case "=":
                setInput(input + buttonSymbol);
                setOutput(eval(input));
                break;
            default:
                setInput("");
                setOutput("0");
        }
    };

    return (
        <div id="calculator">
            <div id="display">
                {input}
                <p id="output">{output}</p>
            </div>
            <div id="buttons">
                {Object.keys(buttonData).map(buttonName => 
                    <Button buttonName={buttonName} key={buttonName} buttonSymbol={buttonData[buttonName]} handleClick={handleClick} />
                )}
            </div>
        </div>
    );
};

export default Calculator;