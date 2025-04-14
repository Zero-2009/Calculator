import { StrictMode } from "react";
import "./css/index.css";
import "./css/normalize.css";
function Calculator () {
    let NumberTemporary = "";
    let OperatorTemporary = "";
    let ArrayNumbers = [];
    let ArrayOperators = [];
    function GetNumber (e) {
        let digit = e.target.innerText;
        let SpanView = document.getElementById("Span");
        NumberTemporary += digit;
        SpanView.innerText = NumberTemporary;
    }   
    function GetOperator (e) {
        let operator = e.target.innerText;
        let SpanView = document.getElementById("Span");
        OperatorTemporary = operator;
        SpanView.innerText = OperatorTemporary;
        ArrayNumbers.push(Number(NumberTemporary));
        ArrayOperators.push(OperatorTemporary);
        NumberTemporary = "";
    }
    function ShowResult () {
        let SpanView = document.getElementById("Span");
        let ResultTemporary = ArrayNumbers[0];
        ArrayNumbers.push(Number(NumberTemporary));
        for (let i = 0; i < ArrayOperators.length; i++) {
            let Number2 = ArrayNumbers[i + 1];
            if (ArrayOperators[i] === "+") {
                ResultTemporary += + Number2;
            } else if (ArrayOperators[i] === "-") {
                ResultTemporary -= Number2;
            } else if (ArrayOperators[i] === "*") {
                ResultTemporary *= Number2;
            } else if (ArrayOperators[i] === "/") {
                ResultTemporary /= Number2;
            } else if (ArrayOperators[i] === "%") {
                ResultTemporary = (ResultTemporary * Number2) / 100;
            }
            SpanView.innerText = ResultTemporary;
        }
        console.log(ArrayNumbers);
        console.log(ArrayOperators);
        NumberTemporary = ResultTemporary;
        ArrayNumbers = [];
        ArrayOperators = [];
    }
    function ClearButton () {
        let SpanView = document.getElementById("Span");
        NumberTemporary = "";
        OperatorTemporary = "";
        ArrayNumbers = [];
        ArrayOperators = [];
        SpanView.innerText = 0;
    }
    function DeleteLast () {
        let SpanView = document.getElementById("Span");
        NumberTemporary = NumberTemporary.slice(0, -1);
        SpanView.innerText = NumberTemporary || 0;
    }
    return (
        <>
            <section className="Content-Calculator">
                <section id="View" className="Calculator-Span">
                    <span id="Span">0</span>
                </section>
                <section className="Calculator-Buttons">
                    <div className="Calculator_Inputs">
                        <button onClick={ClearButton}>clr</button>
                        <button onClick={DeleteLast}>DEL</button>
                        <button onClick={GetOperator}>%</button>
                        <button onClick={GetOperator}>/</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button onClick={GetNumber}>7</button>
                        <button onClick={GetNumber}>8</button>
                        <button onClick={GetNumber}>9</button>
                        <button onClick={GetOperator}>*</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button onClick={GetNumber}>4</button>
                        <button onClick={GetNumber}>5</button>
                        <button onClick={GetNumber}>6</button>
                        <button onClick={GetOperator}>-</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button onClick={GetNumber}>1</button>
                        <button onClick={GetNumber}>2</button>
                        <button onClick={GetNumber}>3</button>
                        <button onClick={GetOperator}>+</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button onClick={GetNumber}>0</button>
                        <button onClick={GetNumber}>.</button>
                        <button onClick={ShowResult} className="Button-Equal">=</button>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Calculator;