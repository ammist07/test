import React, { useContext, useState, useEffect } from 'react'
import { Context as UserContext } from '../context/UserContext'
import Cell from './Cell'
import TimeDisplay from './TimeDisplay'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import apis from '../api'
import win from './win.mp3'

const Board = () => {
	const userContext = useContext(UserContext)
	let audio_win = new Audio(win)
	const [board, setBoard] = useState({
		rows: 3,
		cols: 3,
		flowerChance: 0.25,
		hasWon: false,
		gameBoard: [[]],
		edit: false,
		start: 0,
		end: 0,
	})
	const [done, setDone] = useState(false)
	useEffect(() => {
		createBoard()
		setBoard((prev) => ({
			...prev,
			start: new Date(),
		}))
	}, [])
	useEffect(() => {
		setDone(true)
	}, [board.edit])

	const addNewGame = async () => {
		if (board.hasWon) {
			audio_win.play()
			await apis.addGame({
				userId: userContext.state.user.id,
				playedAt: new Date(),
				gameTime: board.end - board.start,
			})
		}
	}
	useEffect(() => {
		addNewGame()
	}, [board.hasWon])

	const flipCellsAround = async (cord) => {
		let boardcurr = board.gameBoard
		let [y, x] = cord.split('-').map(Number)
		const flipCell = (y, x) => {
			if (x >= 0 && x < board.cols && y >= 0 && y < board.rows) {
				boardcurr[y][x] = !boardcurr[y][x]
			}
		}
		flipCell(y, x)
		flipCell(y, x - 1)
		flipCell(y, x + 1)
		flipCell(y - 1, x)
		flipCell(y + 1, x)
		let hasWon = boardcurr.every((row) => row.every((cell) => !cell))
		setBoard((prev) => ({
			...prev,
			gameBoard: boardcurr,
			hasWon: hasWon,
			end: new Date(),
		}))
	}

	const createBoard = async () => {
		let boardcurr = []
		for (let y = 0; y < board.rows; y++) {
			let row = []
			for (let x = 0; x < board.cols; x++) {
				row.push(Math.random() < board.flowerChance)
			}
			boardcurr.push(row)
		}
		await setBoard((prev) => ({
			...prev,
			gameBoard: boardcurr,
			edit: true,
		}))
	}

	const makeTable = () => {
		let tblBoard = []
		for (let y = 0; y < board.rows; y++) {
			let row = []
			for (let x = 0; x < board.cols; x++) {
				let coord = `${y}-${x}`
				row.push(
					<Cell
						key={coord}
						isLit={board.gameBoard[y][x]}
						flipCellsAroundMe={() => flipCellsAround(coord)}
					/>
				)
			}
			tblBoard.push(<tr key={y}>{row}</tr>)
		}
		return (
			<React.Fragment>
				<table className='Board'>
					<tbody>{tblBoard}</tbody>
				</table>
			</React.Fragment>
		)
	}

	return (
		<div>
			{board.hasWon ? (
				<div>
					<div>Won</div>
					Time: <TimeDisplay time={board.end - board.start} />
					<Button
						data-testid='homebutton'
						variant='contained'
						id='paybutton'
						component={Link}
						to='/'
					>
						Play Again
					</Button>
				</div>
			) : (
				<div>
					<div>Lets Play</div>
					{done ? makeTable() : <div>Loading...</div>}
				</div>
			)}
		</div>
	)
}

export default Board
