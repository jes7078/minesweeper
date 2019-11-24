import React from 'react'

const InitializeMap = (props) => {
	console.log('initializing')
	console.log(props.state)
	return (
		<section class="board-section">
			<table>
				<tbody>
					{props.board.map((row, x) => {
						return (
							<tr key={x}>
								{row.map((col, y) => {
									if (
										props.board[x][y] === '_' ||
										props.board[x][y] === 1 ||
										props.board[x][y] === 2 ||
										props.board[x][y] === 3 ||
										props.board[x][y] === 4 ||
										props.board[x][y] === 5 ||
										props.board[x][y] === 6 ||
										props.board[x][y] === 7 ||
										props.board[x][y] === 8
									) {
										return (
											<td key={y} className="white" onClick={() => props.sendCheck(x, y)}>
												{props.board[x][y]}
											</td>
										)
									} else if (props.board[x][y] === ' ') {
										return (
											<td
												key={y}
												className={props.cellColor}
												onClick={() => props.sendCheck(x, y)}
												onContextMenu={(event) => {
													event.preventDefault()
													props.sendFlag(x, y)
												}}
											>
												{props.board[x][y]}
											</td>
										)
									} else if (props.board[x][y] === 'F') {
										return (
											<td
												key={y}
												className={props.cellColor}
												onClick={() => props.sendCheck(x, y)}
												onContextMenu={(event) => {
													event.preventDefault()
													props.sendFlag(x, y)
												}}
											>
												<i id="flag" className="fas fa-flag" />
											</td>
										)
									} else {
										return (
											<td key={y} className="red" onClick={() => props.sendCheck(x, y)}>
												{props.board[x][y]}
											</td>
										)
									}
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</section>
	)
}

export default InitializeMap
