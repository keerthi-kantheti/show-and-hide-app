// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameClick = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastNameClick = () => {
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state
    const isFirstName = firstName ? (
      <div className="name-container">
        <p>Joe</p>
      </div>
    ) : null
    const isLastName = lastName ? (
      <div className="name-container">
        <p>Jonas</p>
      </div>
    ) : null
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="buttons-container">
          <div className="card-1">
            <button
              className="show-hide-button"
              onClick={this.firstNameClick}
              type="button"
            >
              Show/Hide FirstName
            </button>
            {isFirstName}
          </div>
          <div className="card-1">
            <button
              className="show-hide-button"
              onClick={this.lastNameClick}
              type="button"
            >
              Show/Hide LastName
            </button>
            {isLastName}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
