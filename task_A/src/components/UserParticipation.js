import React, { useState } from 'react'
import ThankYouMessage from './ThankYouMessage';
import AnotherUserParticipation from './AnotherUserParticipation';
import { useContext } from 'react';
import { AppContext } from './context';
function UseerParticipation() {
  const {dispatch}=useContext(AppContext)
  const [answer, setAnswer]= useState('');
  const [displayMessage, setdisplayMessage]= useState(false);
  const [displayVote, setDisplayVote]=useState(false);
  const [question, setQuestion]=useState("What is your favorite programming language?");
  const handleEvent=(event)=>{
      setAnswer(event.target.value)
      setdisplayMessage(true)
      setDisplayVote(true)
      dispatch({
        type=event.target.value
      })

  }
  const reset=(value)=>
  {
      setQuestion("What is your favorite programming language?"); 
  }
  console.log(answer)
  return (
    <div>
     <select onChange={handleEvent}>
      <option value={question} disabled="disabled" selected="selected">What is your favorite programming language?</option>
        <option value="1">JavaScript</option>
        <option value="2">Python</option>
        <option value="3">Java</option>
        <option value="4">C#</option>
      </select>
      <h2>{answer}</h2>
      {displayVote && <AnotherUserParticipation rst={reset}/>}
      {displayMessage && <ThankYouMessage />}
    </div>
  )
}

export default UseerParticipation
