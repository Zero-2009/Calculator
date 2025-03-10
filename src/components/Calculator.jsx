import "./styles/Style-Calculator.css"
import "./styles/normalize.css"

function CalculatorInterview() {
    return (
        <>
            <section class = "Calculator-Background">
                <div class = "Calculator-Span">
                    <div class = "Calculator-Span__Numbers">
                        <span>‎3 + 2</span>
                    </div>
                    <div class = "Calculator-Span__Result">
                        <span>‎ 30</span>
                    </div>
                </div>
                <div class = "Calculator-Buttons">
                    <div class = "Calculator-Buttons_Row1">
                        <button>
                            C
                        </button>
                        <button>
                            +/-
                        </button>
                        <button>
                            %
                        </button>
                        <button>
                            ÷
                        </button>
                    </div>
                    <div class = "Calculator-Buttons_Row2">
                        <button>
                            7
                        </button>
                        <button>
                            8
                        </button>
                        <button>
                            9
                        </button>
                        <button>
                            x
                        </button>
                    </div>
                    <div class = "Calculator-Buttons_Row3">
                        <button>
                            4
                        </button>
                        <button>
                            5
                        </button>
                        <button>
                            6
                        </button>
                        <button>
                            -
                        </button>
                    </div>
                    <div class = "Calculator-Buttons_Row4">
                        <button>
                            1
                        </button>
                        <button>
                            2
                        </button>
                        <button>
                            3
                        </button>
                        <button>
                            +
                        </button>
                    </div>
                    <div class = "Calculator-Buttons_Row5">
                        <button>
                            0
                        </button>
                        <button>
                            .
                        </button>
                        <button>
                            =
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CalculatorInterview;