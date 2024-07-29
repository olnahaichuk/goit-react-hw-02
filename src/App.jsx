import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification  from './components/Notification/Notification'

function App() {

  const [marks, setMarks] = useState(() => { 
    const savedMarks = localStorage.getItem("marks");
    return savedMarks ? JSON.parse(savedMarks) : 
      {
  good: 0,
	neutral: 0,
  bad: 0
  }})

  useEffect(() => {
    localStorage.setItem("marks", JSON.stringify(marks));
  }, [marks]); 

  const updateFeedback = (feedbackType) => {
       setMarks({...marks, [feedbackType]: marks[feedbackType] + 1 })
  }

  const resetFeedback = () => {
   setMarks({
        good: 0,
	      neutral: 0,
	      bad: 0
      })
 }
  const totalFeedback = marks.good + marks.neutral + marks.bad;

  const positiveFeedback =totalFeedback ? Math.round((marks.good / totalFeedback) * 100) : 0 ;

  return (

    <>
      <div >
        <Description />
        <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback}
          resetFeedback={resetFeedback} />
        
        {totalFeedback ? (<Feedback good={marks.good}
          neutral={marks.neutral}
          bad={marks.bad}
          total={totalFeedback} 
          positiveFeedback={positiveFeedback}
        />) : (<Notification/>) }
      </div>
 
    </>
  )
}

export default App
