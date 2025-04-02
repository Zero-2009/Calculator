import "./css/index.css"
import "./css/normalize.css" 
function Calculator () {
    return (
        <>
            <section className="Content-Calculator">
                <section className="Calculator-Span">
                    <span>‎0</span>
                </section>
                <section className="Calculator-Buttons">
                    <div className="Calculator_Inputs">
                        <button>clr</button>
                        <button>DEL</button>
                        <button>%</button>
                        <button>/</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>*</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>-</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>+</button>
                    </div>
                    <div className="Calculator_Inputs">
                        <button>0</button>
                        <button>.</button>
                        <button className="Button-Equal">=</button>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Calculator;