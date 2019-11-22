import React from 'react'

const InitializeMap = (props) => {
	return (
		<table class="wrap">
			{props.table.map((col, i) => {
				return (
					<tr>
						{col.map((row, j) => {
							if (i == 4 && j == 4) {
								return <td id="block">3</td>
							} else {
								return <td id="block" />
							}
						})}
					</tr>
				)
			})}
		</table>
	)
}

export default InitializeMap
