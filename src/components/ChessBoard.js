import React from 'react'
import { useEffect, useRef } from 'react'

function piece(color, type) {
  this.color = color;

}


function ChessBoard(props){
  const [board, changeBoard] = useState(initialBoard)

  function drawSquares(ctx, squareSize){
    for(let i = 0; i <= 7; i++){
      for(let j = 0; j <= 7; j++){
        if ((i + j) % 2 === 0){
          ctx.fillStyle='white'
          ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize)
        }
        else{
          ctx.fillStyle='black'
          ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize)
        }
      }
    }
  }


  const canvasRef = useRef()
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const squareSize = canvas.height / 8
    drawSquares(ctx, squareSize)
  }, []) //Empty array as the second argument means this hook acts like the ComponentDidMount lifecycle method.

  return (
    <canvas ref={canvasRef} height={400} width={400} />
  )
}

export { ChessBoard }