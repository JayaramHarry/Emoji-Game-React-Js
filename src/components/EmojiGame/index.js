/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import NavBar from '../NavBar'

import './index.css'

class EmojiGame extends Component {
  state = {topScore: 0, clickedEmojisList: [], isGameIsPresent: true}

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameIsPresent: true})
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameIsPresent: false})
  }

  selectEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojiLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()
    return (
      <ul className="list-items">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            selectEmoji={this.selectEmoji}
            emojiCard={eachEmoji}
          />
        ))}
      </ul>
    )
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        isPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  render() {
    const {topScore, isGameIsPresent, clickedEmojisList} = this.state
    return (
      <div className="bg-container">
        <NavBar
          topScore={topScore}
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameIsPresent}
        />
        <div className="emoji-lists">
          {isGameIsPresent ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
