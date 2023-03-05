// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCard, selectEmoji} = props
  const {id, emojiName, emojiUrl} = emojiCard

  const onSelectEmoji = () => {
    selectEmoji(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="emoji-btn" onClick={onSelectEmoji}>
        <img className="image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
