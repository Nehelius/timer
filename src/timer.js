import React from 'react'
import styled from 'styled-components'

const TimerStyle = styled.div`
	width: 100%;
	height: 90%;
	margin: 0 auto;

	.app {
		width: 80%;
		height: 80%;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		margin: 0 auto;
		background-color: sienna;

		> .start-stop {
			width: 4em;
			height: 2em;
			position: absolute;
			bottom: 50%;
			left: 50%;
			-ms-transform: translate(-50%, 50%);
			-webkit-transform: translate(-50%, 50%);
			-moz-transform: translate(-50%, 50%);
			-o-transform: translate(-50%, 50%);
			transform: translate(-50%, 50%);
			border: 0;
			border-radius: 5px;
			margin: 0 auto;
			text-align: center;
			background-color: sienna;
			color: white;
			font-weight: 600;
			font-size: 1.5em;
		}

		> .black-button {
			background-color: transparent;
			border: 0;
			width: 100%;
			height: 37vh;
			position: absolute;
			bottom: 0;
			left: 0;
			-ms-transform: translateY(-10%);
			-webkit-transform: translateY(-10%);
			-moz-transform: translateY(-10%);
			-o-transform: translateY(-10%);
			transform: translateY(-10%);
		}

		> .white-button {
			background-color: transparent;
			border: 0;
			width: 100%;
			height: 37vh;
			position: absolute;
			top: 0;
			left: 0;
			-ms-transform: translateY(11%);
			-webkit-transform: translateY(11%);
			-moz-transform: translateY(11%);
			-o-transform: translateY(11%);
			transform: translateY(11%);
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
				-ms-transform: translateX(-50%) rotate(180deg);
				-webkit-transform: translateX(-50%) rotate(180deg);
				-moz-transform: translateX(-50%) rotate(180deg);
				-o-transform: translateX(-50%) rotate(180deg);
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
				-ms-transform: translateX(-50%);
				-webkit-transform: translateX(-50%);
				-moz-transform: translateX(-50%);
				-o-transform: translateX(-50%);
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

	const blackMinutes = parseInt(props.secondCounter / 60, 10).toString().padStart(2, '0')
	const blackSeconds = parseInt(props.secondCounter % 60, 10).toString().padStart(2, '0')
	const blackTenthSeconds = parseInt((props.secondCounter * 10) % 10).toString().padStart(2, '0')

	const whiteMinutes = parseInt(props.counter / 60, 10).toString().padStart(2, '0')
	const whiteSeconds = parseInt(props.counter % 60, 10).toString().padStart(2, '0')
	const whiteTenthSeconds = parseInt((props.counter * 10) % 10).toString().padStart(2, '0')

  return (
    <TimerStyle>
      <div className="app">
				<div className="black-half">
					{props.secondCounter <= 0 ? <div className="black-pieces black-pieces-lost">BLACK LOST</div> : <div className="black-pieces">BLACK {blackMinutes}:{blackSeconds}:{blackTenthSeconds}</div>}
				</div>
				<div className="white-half">
					{props.counter <= 0 ? <div className="white-pieces white-pieces-lost">WHITE LOST</div> : <div className="white-pieces">WHITE {whiteMinutes}:{whiteSeconds}:{whiteTenthSeconds}</div>}
				</div>
				<button className="black-button" onClick={() => props.start ? props.setRunning(1) : null}></button>
				<button className="white-button" onClick={() => props.start ? props.setRunning(2) : null}></button>
				{props.start ? <button className="start-stop" onClick={handleReset}>STOP</button> : <button className="start-stop" onClick={() => props.setStart(true)}>START</button>}
      </div>
    </TimerStyle>
  )
}

export default Timer