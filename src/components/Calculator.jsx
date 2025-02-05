import "./Style-Calculator.css";
function InterfaceCreate() {
    let OperatorChanged = "";
    let ResultTemporary = "";
    let NumberTemporaty = "";
    let arrayNumber = [];
    let arrayOperator = [];
    const addNumber = (e) => {
        let digit = e.target.innerText;
        let View = document.getElementById("view-data");
        let btnOperatorDisable = document.querySelectorAll("#btn-operator");
        View.textContent += digit;
        NumberTemporaty += digit;
        btnOperatorDisable.forEach(function(button) {
            button.disabled = false;
        })
    }
    const addOperator = (e) => {
        let operator = e.target.innerText;
        let View = document.getElementById("view-data");
        let btnOperatores = document.querySelectorAll("#btn-operator");
        if (NumberTemporaty === "") {
            if (operator === "*" || operator === "/") {
                return
            } else if (operator === "+" || operator === "-") {
                if (operator === "+") {
                    View.innerText = operator;
                    OperatorChanged = "+";
                } else if (operator === "-") {
                    View.innerText = operator;
                    OperatorChanged = "-";
                }
            }
        } else {
            if (arrayNumber.length === arrayOperator.length) {
                if (operator === "+") {
                    View.textContent += operator
                    arrayOperator.push(operator);
                    console.log("Changed to more")
                    console.log(NumberTemporaty)
                } else if (operator === "-") {
                    View.textContent += operator
                    arrayOperator.push(operator);
                    console.log("Changed to resta")
                }
            }
            if (OperatorChanged === "+") {
                arrayNumber.push(Math.abs(Number(NumberTemporaty)));
            } else if (OperatorChanged === "-") {
                arrayNumber.push(-Math.abs(Number(NumberTemporaty)));
            }
            NumberTemporaty = "";
        }
    }
    const showResult = () => {
        const View = document.getElementById("view-data");
        if (View.textContent === "") {
            return alert("Error there is not number");
        } else if (arrayOperator.length === 0) {
            return alert("Error there is not operator")
        } else if (NumberTemporaty === "") {
            return 
        } else {
            // Push the last number 
            arrayNumber.push(Number(NumberTemporaty));
            // Call the function operated for the result
            operated();
            // Show the result and finished the operation
            View.innerText = ResultTemporary;
        }
    }
    // function to operated the numbers and operators
    function operated() {
        arrayOperator.forEach((element, index) => {
            let number1 = arrayNumber[index];
            let number2 = arrayNumber[index + 1];
            if (index === 0) {
                if (element === "+") {
                    ResultTemporary = number1 + number2;
                } else if (element === "-") {
                    ResultTemporary = number1 - number2;
                } else if (element === "*") {
                    ResultTemporary = number1 * number2;
                } else if (element === "/") {
                    ResultTemporary = number1 / number2;
                }
            } else {
                if (element === "+") {
                    ResultTemporary += number2;
                } else if (element === "-") {
                    ResultTemporary -= number2;
                } else if (element === "*") {
                    ResultTemporary *= number2;
                } else if (element === "/") {
                    ResultTemporary /= number2;
                }
            }
        })
    }
    const DeleteLastDigit = () => {
        console.log("Delete Last Digit")
    }
    const Porcentage = () => {
        console.log("Porcentage")
    }
    const clearNumber = () => {
        let View = document.getElementById("view-data");
        // Reset the values of numbers, arrayNumber and arrayOperators
        ResultTemporary = "";
        NumberTemporaty = "";
        arrayNumber = [];
        arrayOperator = [];
        // Clear the view of number
        View.innerText = "";
    }
    return (
        <>
            <section className="interface-calculator">
                <section className="interface-view">
                    <div className="view-numbers" id="view-data"></div>
                </section>   
                <section className="interface-container">
                        <div className="interface-numbers">  
                            <button className="btn-num" onClick={clearNumber}>clr</button>
                            <button className="btn-num" onClick={DeleteLastDigit}>DEL</button>
                            <button className="btn-num" onClick={Porcentage}>%</button>
                            <button className="btn-num" onClick={addNumber}>7</button>
                            <button className="btn-num" onClick={addNumber}>8</button>
                            <button className="btn-num" onClick={addNumber}>9</button>
                            <button className="btn-num" onClick={addNumber}>4</button>
                            <button className="btn-num" onClick={addNumber}>5</button>
                            <button className="btn-num" onClick={addNumber}>6</button>
                            <button className="btn-num" onClick={addNumber}>1</button>
                            <button className="btn-num" onClick={addNumber}>2</button>
                            <button className="btn-num" onClick={addNumber}>3</button>
                            <button className="btn-num" onClick={addNumber}>.</button>
                            <button className="btn-num" onClick={addNumber}>0</button>
                        </div>
                        <div className="Interface-Operator-Result">
                            <div className="interface-operators">
                                <button id="btn-operator" onClick={addOperator}>/</button>
                                <button id="btn-operator" onClick={addOperator}>*</button>
                                <button id="btn-operator" onClick={addOperator}>-</button>
                                <button id="btn-operator" onClick={addOperator}>+</button>
                            </div>
                            <div className="interface-result">
                                <button className="Btn-result" onClick={showResult}>=</button>
                            </div>
                        </div>
                </section>
            </section>
        </>
    )
}
export default InterfaceCreate;