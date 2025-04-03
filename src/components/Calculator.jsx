import "./css/index.css"
import "./css/normalize.css" 
function Calculator () {
    let CompleteOperation = [];
    let ResultOperation = "";
    let NumberTemporary = "";
    function GetNumber (e) {
        let digit = e.target.innerText;
        let Span = document.getElementById("Span");
        NumberTemporary += digit;
        Span.textContent = NumberTemporary;
    }
    function GiveOperator (e) {
        let operator = e.target.innerText;
        let Span = document.getElementById("Span");
        Span.textContent = operator;
        if (NumberTemporary !== "" ) {
            CompleteOperation.push(NumberTemporary);
            NumberTemporary = "";
            console.log("Truth")
        }
    }
    function ShowResult () {
        let Span = document.getElementById("Span");
        console.log(CompleteOperation);
        Span.textContent = ResultOperation;
    }
    return (
        <>
            <section className="Content-Calculator">
                <section id="View" className="Calculator-Span">
                    <span id="Span">0</span>
                </section>
                <section className="Calculator-Buttons">
                    <div className="Calculator_Inputs">
                        <button>clr</button>
                        <button>DEL</button>
                        <button>%</button>
                        <button onClick={GiveOperator}>/</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button onClick={GetNumber}>7</button>
                        <button onClick={GetNumber}>8</button>
                        <button onClick={GetNumber}>9</button>
                        <button onClick={GiveOperator}>*</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button onClick={GetNumber}>4</button>
                        <button onClick={GetNumber}>5</button>
                        <button onClick={GetNumber}>6</button>
                        <button onClick={GiveOperator}>-</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button onClick={GetNumber}>1</button>
                        <button onClick={GetNumber}>2</button>
                        <button onClick={GetNumber}>3</button>
                        <button onClick={GiveOperator}>+</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button onClick={GetNumber}>0</button>
                        <button onClick={GiveOperator}>.</button>
                        <button onClick={ShowResult} className="Button-Equal">=</button>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Calculator;