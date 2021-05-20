import React from 'react'
import styled from 'styled-components'

const TimerStyle = styled.div`
	width: 100vw;
	height: 100vh;
	margin: 0 auto;

	.app {
		width: 90vw;
		height: 95vh;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0 auto;
		background-color: sienna;

		> .controls {
			width: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%);

			> .start-stop {
				width: 4em;
				height: 2em;
				position: absolute;
				bottom: 50%;
				left: 50%;
				transform: translate(-50%, 50%);
				border: 0;
				border-radius: 5px;
				background-color: sienna;
				color: white;
				font-weight: 600;
				font-size: 1.5em;
			}

			> .black-button {
				background-color: transparent;
				border: 0;
				width: 100%;
				height: 42vh;
				position: absolute;
				bottom: 0;
				left: 0;
				transform: translateY(-7%);
			}

			> .white-button {
				background-color: transparent;
				border: 0;
				width: 100%;
				height: 42vh;
				position: absolute;
				top: 0;
				left: 0;
				transform: translateY(15%);
			}
		}

		> .black-half {
			background-color: black;
			border-radius: 15px;
			width: 100%;
			height: 50%;
			position: absolute;
			top: -0.5em;

			> .black-pieces {
				color: white;
				position: absolute;
				top: 10%;
				left: 50%;
				transform: translateX(-50%) rotate(180deg);
				font-size: 3em;
				text-align: center;
				line-height: 2em;
			}

      .black-pieces-lost {
        background-color: red;
        border-radius: 15px;
        width: 50vw;
      }
		} 

		> .white-half {
			background-color: white;
			border-radius: 15px;
			width: 100%;
			height: 50%;
			position: absolute;
			bottom: -0.5em;

			> .white-pieces {
				color: black;
				position: absolute;
				bottom: 10%;
				left: 50%;
				transform: translateX(-50%);
				font-size: 3em;
				text-align: center;
				line-height: 2em;
			}

      > .white-pieces-lost {
        background-color: red;
        border-radius: 15px;
        width: 50vw;
      }
		} 
	}
`

const Timer = (props) => {
  const handleReset = () => {
    props.setStart(false)
    props.setCounter(undefined)
    props.setSecondCounter(undefined)
    props.setRunning(1)
  }

	if (props.start) {
		const whiteButton = document.querySelector('.white-button')
		props.counter <= 0 || props.secondCounter <= 0 ? whiteButton.disabled = true : whiteButton.disabled = false
		const blackButton = document.querySelector('.black-button')
		props.counter <= 0 || props.secondCounter <= 0 ? blackButton.disabled = true : blackButton.disabled = false
	}

  return (
    <TimerStyle>
      <div className="app">
          <div className="black-half">
            {props.secondCounter <= 0 ? <div className="black-pieces black-pieces-lost">BLACK LOST</div> : <div className="black-pieces">BLACK {parseInt(props.secondCounter / 60, 10)}:{parseInt(props.secondCounter % 60, 10)}:{parseInt((props.secondCounter * 10) % 10)}</div>}
          </div>
          <div className="white-half">
            {props.counter <= 0 ? <div className="white-pieces white-pieces-lost">WHITE LOST</div> : <div className="white-pieces">WHITE {parseInt(props.counter / 60, 10)}:{parseInt(props.counter % 60, 10)}:{parseInt((props.counter * 10) % 10)}</div>}
          </div>
          <div className="controls">
            {props.start ? <button className="start-stop" onClick={handleReset}>STOP</button> : <button className="start-stop" onClick={() => props.setStart(true)}>START</button>}
            {/* {props.running === 2 ? <button className="black-button" onClick={() => props.start ? props.setRunning(1) : null}></button> : <button className="white-button" onClick={() => props.start ? props.setRunning(2) : null}></button>} */}
						<button className="black-button" onClick={() => props.start ? props.setRunning(1) : null}></button>
						<button className="white-button" onClick={() => props.start ? props.setRunning(2) : null}></button>
          </div>
      </div>
    </TimerStyle>
  )
}

export default Timer