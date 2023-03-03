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
                if(input == "0" || input.substring(input.length-2, input.length) == "+0" || input.substring(input.length-2, input.length) == "-0" || input.substring(input.length-2, input.length) == "*0" || input.substring(input.length-2, input.length) == "/0") {
                    setInput(input.substring(0, input.length-1) + buttonSymbol);
                }
                else if(output !== "0") {
                    setInput(buttonSymbol);
                    setOutput("0");
                }
                else {
                    setInput(input + buttonSymbol); 
                }
                break;
            case "0":
                if(input != "0" && input.substring(input.length-2, input.length) != "+0" && input.substring(input.length-2, input.length) != "-0" && input.substring(input.length-2, input.length) != "*0" && input.substring(input.length-2, input.length) != "/0") {
                    setInput(input + buttonSymbol);
                }
                break;
            case ".":
            case "-":
                if(input.substring(input.length-1, input.length) != ".") {
                    setInput(input + buttonSymbol);
                }
                break;
            case "+":
            case "*":
            case "/":
                if(input.length != 0 && input.substring(input.length-1, input.length) != "." && input.substring(input.length-1, input.length) != "+" && input.substring(input.length-1, input.length) != "-" && input.substring(input.length-1, input.length) != "*" && input.substring(input.length-1, input.length) != "/") {
                    setInput(input + buttonSymbol);
                }
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