import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import createGlobalStyle from 'styled-components'

import Timer from './timer'
import SelectTime from './selectTime'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		box-sizing: border-box;
	}

	html, body {
		height: 90%;
		width: 100%;
		background-color: sienna;
		font-family: Arial, Helvetica, sans-serif;
	}
`

const App = () => {
	const [counter, setCounter] = useState()
	const [secondCounter, setSecondCounter] = useState()
	const [running, setRunning] = useState(1)
	const [start, setStart] = useState(false)

	useEffect(() => {
		if (running === 1 && counter > 0 && start) {
			setTimeout(() => setCounter(counter - 0.1), 100)
		} else if (running === 2 && secondCounter > 0 && start) {
			setTimeout(() => setSecondCounter(secondCounter - 0.1), 100)
		}
	}, [running, counter, secondCounter, start])

	return (
		<>
			<GlobalStyle />
			{!counter || !secondCounter ? 
				(<SelectTime 
					setCounter={setCounter}
					setSecondCounter={setSecondCounter}
				/>) : (<Timer
				counter={counter}
				secondCounter={secondCounter}
				start={start}
				running={running}
				setRunning={setRunning}
				setStart={setStart}
				setCounter={setCounter}
				setSecondCounter={setSecondCounter}
			/>)}
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))