import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context';
function PollDisplay() {
  const {java} =useContext(AppContext);
  return (
    <div>
      <h1>Polling App  ------ {java}</h1>
    </div>
  )
}

export default PollDisplay
