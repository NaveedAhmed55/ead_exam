import React, { useState } from 'react'
import ThankYouMessage from './ThankYouMessage';
import AnotherUserParticipation from './AnotherUserParticipation';
import PollDisplay from './PollDisplay';
function UseerParticipation() {
  const [displayPoll, setDisplayPoll]= useState(false);
  const displayPollF=()=>{
    setDisplayPoll(!displayPoll)
  }
  return (
    <div>
      <button onClick={displayPollF}>Vote</button>
      {displayPoll && <PollDisplay/>}
    </div>
  )
}

export default UseerParticipation
