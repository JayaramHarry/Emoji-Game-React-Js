// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProgress} = props
  return (
    <nav className=" nav-container navbar navbar-dark bg-light">
      <div className=" title-score-container">
        <div className="logo-and-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="emoji-logo"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-total">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
