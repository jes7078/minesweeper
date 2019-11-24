import React, { useState } from 'react'

const DifficultyChoice = (props) => {
  const [ dNumber,setDNumber ] = useState(0)
  
	const difficultyZero = () => {
   
		setDNumber(0)
     props.createTheBoard(0)
     props.setOutput("")
		
	}

	const difficultyOne = () => {
		setDNumber(1)
    props.createTheBoard(1)
    props.setOutput("")
	}

	const difficultyTwo = () => {
		setDNumber(2)
    props.createTheBoard(2)
    props.setOutput("")
	}
	return (
	<>
		<h1>enter difficulty</h1>
    <section class="buttons">
		<button onClick={difficultyZero}>difficulty 0</button>
		<button onClick={difficultyOne}>difficulty 1</button>
		<button onClick={difficultyTwo}>difficulty 2</button>
    </section>
	</>
  )
}

export default DifficultyChoice
