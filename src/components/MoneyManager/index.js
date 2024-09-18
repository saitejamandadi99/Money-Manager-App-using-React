import {Component} from 'react'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  render() {
    return (
      <div className="app-Container">
        <div className="money-Manager-App">
          <div className="user-Container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="welcome">
              Welcome back to your <span className='spanEle'>Money Manager</span>
            </p>
          </div>
          <ul className="transaction-Item-Container"></ul>
          <div className="transaction-history-Container">
            <form></form>
            <div className="history-Container">
              <div className="history-Title-Container"></div>
              <ul className="history-Container"></ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
