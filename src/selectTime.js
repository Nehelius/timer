import React, { useState } from 'react'
import styled from 'styled-components'

const SelectStyle = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;

  > h1 {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  > button {
    font-size: 1.5em;
    background: transparent;
    border: 5px solid white;
    border-radius: 5px;
    color: white;
    padding: 0.5em;
    margin: 0.5em;
    box-sizing: border-box;
    border: 5px solid white;
    border-radius: 10px;
  }

  > .time-button {
    font-size: 1.5em;
    background: transparent;
    border: 3px solid white;
    border-radius: 0;
    color: white;
    padding: 0.5em;
  }

  > .pressed {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    transition-duration: 0.5s;
  }

  > .start-button {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%)
  }
`

const SelectTime = (props) => {
  const [time, setGameTime] = useState()

  const setCounters = () => {
    props.setCounter(time)
    props.setSecondCounter(time)
  }

  const setTime = (e) => {
    const timeButton = e.target
    document.querySelectorAll('button').forEach(button => button.classList.remove('pressed'))
    timeButton.classList.add('pressed')

    setGameTime(timeButton.value)
  }

  return (
    <SelectStyle>
      <h1>A Simple Chess Clock</h1>
      <button className="time-button" value="10" onClick={setTime}>10 SEC</button>
      <button className="time-button" value="60" onClick={setTime}>1 MIN</button>
      <button className="time-button" value="180" onClick={setTime}>3 MIN</button>
      <button className="time-button" value="300" onClick={setTime}>5 MIN</button>
      <button className="time-button" value="600" onClick={setTime}>10 MIN</button>
      <button className="time-button" value="900" onClick={setTime}>15 MIN</button>
      <button className="time-button" value="1800" onClick={setTime}>30 MIN</button>
      <button className="start-button" onClick={setCounters}>START</button>
    </SelectStyle>
  )
}

export default SelectTime