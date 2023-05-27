import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context';

function PollDisplay() {
  const {question,java,python, javascript, c} =useContext(AppContext);
  const {dispatch}=useContext(AppContext)
  const change=(event)=>{
    dispatch({
        type:event.target.value,
        payload:event.target.value
     })
  }
  const handleSubmit=(event)=>
  {
     change(event)
  }
  return (
    <div>  
      <h1>What is your favorite programming language?</h1>
      <input type='radio' id="javascript" name='language' value='1' onChange={handleSubmit} />
      javascript
      <input type='radio' id="python" name='language' value='2' onChange={handleSubmit} />
      python
      <input type='radio' id="java" name='language' value='3' onChange={handleSubmit} />
      java
      <input type='radio' id="c" name='language' value='4' onChange={handleSubmit} />
      c
      <button onClick={handleSubmit}>submit</button>
      <h1>Poll Question {question}</h1>
      <h2>Answer Choices with Vote Counts:</h2>
      <h3>javascript: {javascript} votes</h3>
      <h3>python: {python} votes</h3>
      <h3>java: {java} votes</h3>
      <h3>c#: {c} votes</h3>
    </div>
  )
}

export default PollDisplay
