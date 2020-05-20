import React, {useState, useEffect} from 'react'

const Grid = (props) => {
    
    const [grid, setGrid] = useState([])
    const [winner, setWinner] = useState([])
    const [image, setImage] = useState('https://images.unsplash.com/photo-1589377778631-73ae767b3413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')

    useEffect(() => {
        const makeGrid = async () => {
            const newGrid = await createGrid()
            await setGrid(newGrid.matrix)
            await setWinner(newGrid.winningGrid)
            console.log(document.querySelectorAll('.tile'))
            const tiles = document.querySelectorAll('.tile')
            tiles.forEach(element => {
                element.style.backgroundImage = image
            })
        }
        makeGrid()
    }, [])

    const randomizer = () => {
        return Math.floor(Math.random()*(props.matrixSide*props.matrixSide - 1) + 1)
    }
    
    const createGrid = async () => {
        let matrix = []
        let usedNums = []
        let randomNum = randomizer()
        let winningGrid = []
        let newRow = []
        let newWinnerRow = []
        for(let i = 1; i <= props.matrixSide; i++){
            newRow = []
            newWinnerRow = []
            for (let j = 1; j <= props.matrixSide; j++) {
                if(i === props.matrixSide && j === props.matrixSide){
                    await usedNums.push(0)
                    await newRow.push(0)
                    await newWinnerRow.push(j + props.matrixSide * (i - 1))
                } else {
                    while(usedNums.indexOf(randomNum) !== -1){
                        randomNum = await randomizer()
                    }
                    await usedNums.push(randomNum)
                    await newRow.push(randomNum)
                    await newWinnerRow.push(j + props.matrixSide * (i - 1));
                }
            }
            matrix.push(newRow)
            winningGrid.push(newWinnerRow)
        }
        winningGrid[props.matrixSide - 1][props.matrixSide - 1] = 0
        return {
            matrix: matrix,
            winningGrid: winningGrid
        }
    }

    const move = async (rowIndex, index) => {
        let updatedGrid = [...grid]
        if(rowIndex === 0 && index === 0) {
            if (grid[rowIndex + 1][index] === 0) {
                updatedGrid[rowIndex + 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex][index + 1] === 0) {
                updatedGrid[rowIndex][index + 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            }
        } else if (rowIndex === 0 && index === grid[rowIndex].length - 1) {
            if(grid[rowIndex][index - 1] === 0){
                updatedGrid[rowIndex][index - 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex + 1][index] === 0) {
                updatedGrid[rowIndex + 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            }
        } else if (rowIndex === 0) {
            if(grid[rowIndex][index - 1] === 0){
                updatedGrid[rowIndex][index - 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex + 1][index] === 0) {
                updatedGrid[rowIndex + 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex][index + 1] === 0) {
                updatedGrid[rowIndex][index + 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            }
        } else if (rowIndex === grid.length - 1 && index === 0) {
            if (grid[rowIndex - 1][index] === 0) {
                updatedGrid[rowIndex - 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex][index + 1] === 0) {
                updatedGrid[rowIndex][index + 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            }
        } else if (rowIndex === grid.length - 1 && index === grid[rowIndex].length - 1) {
            if(grid[rowIndex][index - 1] === 0){
                updatedGrid[rowIndex][index - 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex - 1][index] === 0) {
                updatedGrid[rowIndex - 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            }
        } else if (rowIndex === grid.length - 1) {
            if(grid[rowIndex][index - 1] === 0){
                updatedGrid[rowIndex][index - 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex - 1][index] === 0) {
                updatedGrid[rowIndex - 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex][index + 1] === 0) {
                updatedGrid[rowIndex][index + 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            }
        } else if (index === 0) {
            if (grid[rowIndex - 1][index] === 0) {
                updatedGrid[rowIndex - 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex + 1][index] === 0) {
                updatedGrid[rowIndex + 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex][index + 1] === 0) {
                updatedGrid[rowIndex][index + 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            }
        } else if (index === grid[rowIndex].length - 1){
            if(grid[rowIndex][index - 1] === 0){
                updatedGrid[rowIndex][index - 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex - 1][index] === 0) {
                updatedGrid[rowIndex - 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex + 1][index] === 0) {
                updatedGrid[rowIndex + 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            }
        } else {
            if(grid[rowIndex][index - 1] === 0){
                updatedGrid[rowIndex][index - 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex - 1][index] === 0) {
                updatedGrid[rowIndex - 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex + 1][index] === 0) {
                updatedGrid[rowIndex + 1][index] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            } else if (grid[rowIndex][index + 1] === 0) {
                updatedGrid[rowIndex][index + 1] = updatedGrid[rowIndex][index]
                updatedGrid[rowIndex][index] = 0
                await setGrid(updatedGrid)
            }
        }
        console.log(winner)
        console.log(grid)
        if(JSON.stringify(grid) === JSON.stringify(winner)){
            alert("YOU WIN!!!!")
        }
    }
    
    return (
			<div className="grid-container">
				{grid.map((row, rowIndex) => {
                    return (
                        <div className = {`row row${rowIndex + 1}`} key={`row ${rowIndex + 1}`}>
                            {row.map((tile, index) => (
                                tile === 0 ? (
                                    <div id='zero' className={`tile`} key={`tile${index}`}>{tile}</div>
                                ):(
                                    <div
                                        onClick={() => move(rowIndex, index)}
                                        className={`tile`}
                                        key={`tile${index}`}
                                        style={{backgroundPosition: `${(tile - 1)%props.matrixSide * -100}px ${Math.floor((tile - 1)/props.matrixSide)*-100}px`}}
                                    >
                                        {tile}
                                    </div>
                                )
                            ))}
                        </div>
                    )
                })}
			</div>
		);
}

export default Grid
