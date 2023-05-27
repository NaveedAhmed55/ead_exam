import React, { useState } from 'react'
import ThankYouMessage from './ThankYouMessage';
import AnotherUserParticipation from './AnotherUserParticipation';
import { useContext } from 'react';
import { AppContext } from './context';
function UseerParticipation() {
  const [displayMessage, setdisplayMessage]= useState(false)
  return (
    <div>
      {displayMessage && <ThankYouMessage />}
    </div>
  )
}

export default UseerParticipation
