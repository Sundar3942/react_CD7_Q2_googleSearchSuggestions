/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {
    searchSequence: '',
  }

  onSearchInput = event => {
    this.setState({searchSequence: event.target.value})
  }

  onPressingButton = suggestion => {
    this.setState({searchSequence: suggestion})
  }

  render() {
    const {searchSequence} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchSequence.toLowerCase()),
    )

    return (
      <div className="page">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo"
          alt="google logo"
        />
        <div className="search-suggestions-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              className="search-input"
              type="search"
              placeholder="Search Google"
              onChange={this.onSearchInput}
              value={searchSequence}
            />
          </div>
          <ul>
            {searchResults.map(each => (
              <SuggestionItem
                suggestionsList={each}
                key={each.id}
                onPressingButton={this.onPressingButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
