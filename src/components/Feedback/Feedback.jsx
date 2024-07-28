import css from "./Feedback.module.css"
const Feedback = ({good, neutral, bad , total , positiveFeedback }) => {
  return (
    <>
      <ul className="marksList">
              <li className={css.marksListItem}>Good: {good}</li>
              <li className={css.marksListItem}>Neutral: {neutral}</li>
              <li className={css.marksListItem}>Bad: {bad}</li>
              <li className={css.marksListItem}><b>Total:</b> { total}</li>
        <li className={css.marksListItem}><b>Positive:</b> {positiveFeedback} </li>
      </ul>
   </>
  )
}

export default Feedback
