import React, { useState } from 'react'

const DifficultyChoice = (props) => {
	const [ dNumber, setDNumber ] = useState(0)
	const difficultyZero = () => {
   
		setDNumber(0)
 	props.createTheTable(0)
		
	}

	const difficultyOne = () => {
		setDNumber(1)
		{
			{
				props.createTheTable(1)
			}
		}
	}

	const difficultyTwo = () => {
		setDNumber(2)
		{
			{
				props.createTheTable(2)
			}
		}
	}
	return (
	<>
		<h1>enter difficulty</h1>
		<button onClick={difficultyZero}>difficulty 0</button>
		<button onClick={difficultyOne}>difficulty 1</button>
		<button onClick={difficultyTwo}>difficulty 2</button>
	</>
  )
}

export default DifficultyChoice
