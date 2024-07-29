import css from "./Options.module.css"

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
    return (
       <>
            <button type="button" className={css.btnMark} onClick={()=>{updateFeedback("good")}}>Good</button>
            <button type="button" className={css.btnMark} onClick={()=>{updateFeedback("neutral")}}>Neutral</button>
            <button type="button" className={css.btnMark} onClick={() => {updateFeedback("bad") }}>Bad</button>
            {totalFeedback > 0 && (
        <button type="button" className={css.btnMark} onClick={() => {resetFeedback("reset")}}>Reset</button>
      )}
        </>
    )
}

export default Options;