/* eslint-disable react/button-has-type */
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onPressingButton} = props
  const {suggestion} = suggestionsList

  const onClick = () => {
    onPressingButton(suggestion)
  }

  return (
    <li type="none">
      <div className="item-container">
        <p className="suggestion">{suggestion}</p>

        <button onClick={onClick}>
          <img
            className="up-left-arrow"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
