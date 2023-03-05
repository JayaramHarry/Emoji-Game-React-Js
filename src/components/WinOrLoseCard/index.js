// Write your code here.
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {score, isPlayAgain, isWon} = props
  const imgUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-card-container">
      <div className="result-container">
        <h1 className="heading">{gameStatus}</h1>
        <p className="best-score">{scoreLabel}</p>
        <p className="top-score">{score}/12</p>
        <button onClick={isPlayAgain} className="play-button" type="button">
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
