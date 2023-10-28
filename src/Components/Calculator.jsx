import React from 'react'
import { useState } from 'react'
import { Container, Current, Previous, Screen, Button } from '../Styles/MainStyle'

const Calculator = () => {

    const [current, setCurrent] = useState("");
    const [previous, setPrevious] = useState("");
    const [operations, setOperations] = useState("");

    const appendCurrentValue = (btnClicked) => {
        // console.log(btnClicked);
        // console.log(btnClicked.target.getAttribute("data")); 
        const btnClickedValue = btnClicked.target.getAttribute("data");
        if (btnClickedValue === "." && current.includes(".")) {
            return btnClickedValue && current
        }
        setCurrent(current + btnClickedValue)
    };

    const deleteHandler = () => {
        setCurrent(String(current).slice(0, -1))        // converts current value in String so that even if we get in number it will convert in string and then we slice from last number to end of number
    };

    const allclearHandler = () => {
        setPrevious("");
        setCurrent("");
        setOperations("");
    };

    const operationHandler = (operationClicked) => {

        if (current === "") {
            return current
        }
        else if (previous !== "") {
            let value = compute();
            setPrevious(value)
        }
        else {
            setPrevious(current);
        }

        setCurrent("");
        setOperations(operationClicked.target.getAttribute("data"));

    };

    function equalHandler() {
        let value = compute();
        if (value === undefined || value === null) return;
        setCurrent(value);
        setPrevious("");
        setOperations("");
    };

    const compute = () => {
        let result;

        const previousNumber = parseFloat(previous);
        const currentNumber = parseFloat(current);

        if (isNaN(previousNumber) || isNaN(currentNumber)) return;

        // if( operations === "-" ) {
        //     result = result = previousNumber - currentNumber
        // }
        // else if ( operations === "x" ){
        //     result = result = previousNumber + currentNumber
        // }

        switch (operations) {
            case "÷":
             return(
                 result = previousNumber / currentNumber
             )
             
            case "x" :
                result = previousNumber * currentNumber;
                break;
            
            case "-":
                result = previousNumber - currentNumber;
                break;
            
            case "+" :
                result = previousNumber + currentNumber;
                break;
        } 


        return result;
    }

    return (
        <>
            <Container>
                <Screen>
                    <Previous> {previous} {operations} </Previous>
                    <Current> {current} </Current>
                </Screen>
                <Button gridSpan={2} acdel onClick={allclearHandler} >AC</Button>      {/* gridSpan={2} <- sending this props to css so that we can function in css to span 2 columns */} {/* acdel <- sending props to style  */}

                <Button acdel onClick={deleteHandler} >DEL</Button>
                <Button operation data={"÷"} onClick={operationHandler} >÷</Button>

                <Button data={7} onClick={appendCurrentValue} >7</Button>   {/* data={7} <- for this data attribute we cant target and get that value */}
                <Button data={8} onClick={appendCurrentValue} >8</Button>
                <Button data={9} onClick={appendCurrentValue} >9</Button>

                <Button operation data={"x"} onClick={operationHandler} >x</Button>

                <Button data={4} onClick={appendCurrentValue} >4</Button>
                <Button data={5} onClick={appendCurrentValue} >5</Button>
                <Button data={6} onClick={appendCurrentValue} >6</Button>

                <Button operation data={"+"} onClick={operationHandler} >+</Button>

                <Button data={1} onClick={appendCurrentValue} >1</Button>
                <Button data={2} onClick={appendCurrentValue} >2</Button>
                <Button data={3} onClick={appendCurrentValue} >3</Button>

                <Button operation data={"-"} onClick={operationHandler} >-</Button>

                <Button data={0} zero onClick={appendCurrentValue} >0</Button>

                <Button operation data={"."} onClick={appendCurrentValue} >.</Button>

                <Button gridSpan={2} onClick={equalHandler} operation equal >=</Button>
            </Container>
        </>
    )
}

export default Calculator
