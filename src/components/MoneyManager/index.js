import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

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
              Welcome back to your{' '}
              <span className="spanEle">Money Manager</span>
            </p>
          </div>
          <div className="transaction-Item-Container">
            <MoneyDetails />
          </div>
          <div className="transaction-history-Container">
            <form className="form-Container">
              <h1 className="form-Heading">Add Transaction</h1>
              <label htmlFor="Title">Title</label>
              <input type="text" placeholder="Title" id="Title" />
              <label htmlFor="Amount">Amount</label>
              <input type="text" placeholder="Amount" id="Amount" />
              <label htmlFor="type">Type</label>
              <select id="type">
                {transactionTypeOptions.map(eachType => (
                  <option key={eachType.optionId} value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="addBtn">
                Add
              </button>
            </form>
            <div className="history-Container">
              <h1 className="form-Heading">History</h1>
              <div className="history-List-Container">
                <div className="history-Title-Container">
                  <p className="history-title title">Title</p>
                  <p className="history-title">Amount</p>
                  <p className="history-title">Type</p>
                </div>
                <hr className="line" />
                <ul className="history-Container">
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
