import React, { useState, useRef, useEffect } from 'react'

const App = () => {

	const Ref = useRef(null);
  const [message, setMessage]=useState('');

	const [timer, setTimer] = useState('0');

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		return {
			total, seconds
		};
	}

	const startTimer = (e) => {
		let { total, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
				 (seconds > 9 ? seconds : seconds)
			)
		}
    if (total==0)
    {
       setMessage("Time's up!")
    }
	}

	const clearTimer = (e) => {
		setTimer('10');
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 10);
		return deadline;
	}

	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	const onClickReset = () => {
		clearTimer(getDeadTime());
	}

	return (
		<div className="App">
			<h2>{timer}</h2>
      <h3>{message}</h3>
		</div>
	)
}

export default App;
