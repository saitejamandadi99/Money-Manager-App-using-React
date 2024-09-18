import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
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

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    transactionList: [],
    title: '',
    amount: '',
    optValue: 'INCOME',
  }

  // Add a new transaction
  onClickAddBtn = event => {
    event.preventDefault()
    const {title, optValue, amount} = this.state
    const amountValue = parseInt(amount, 10)

    if (title && amount && optValue) {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount: amountValue,
        optValue,
      }

      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        title: '',
        amount: '',
        optValue: 'INCOME',
      }))

      if (optValue === 'INCOME') {
        this.setState(prevState => ({income: prevState.income + amountValue}))
      } else {
        this.setState(prevState => ({
          expenses: prevState.expenses + amountValue,
        }))
      }
    }
  }

  // Delete a transaction
  onDeleteTransaction = id => {
    this.setState(prevState => {
      const transactionToDelete = prevState.transactionList.find(
        item => item.id === id,
      )

      if (transactionToDelete) {
        const {amount, optValue} = transactionToDelete
        const updatedIncome =
          optValue === 'INCOME' ? prevState.income - amount : prevState.income
        const updatedExpenses =
          optValue === 'EXPENSES'
            ? prevState.expenses - amount
            : prevState.expenses

        return {
          transactionList: prevState.transactionList.filter(
            item => item.id !== id,
          ),
          income: updatedIncome,
          expenses: updatedExpenses,
        }
      }
      return null
    })
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({optValue: event.target.value})
  }

  render() {
    const {
      income,
      expenses,
      title,
      amount,
      optValue,
      transactionList,
    } = this.state
    const balance = income - expenses

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
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          </div>
          <div className="transaction-history-Container">
            <form className="form-Container" onSubmit={this.onClickAddBtn}>
              <h1 className="form-Heading">Add Transaction</h1>
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                placeholder="Title"
                id="Title"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="Amount">Amount</label>
              <input
                type="text"
                placeholder="Amount"
                id="Amount"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type">Type</label>
              <select id="type" value={optValue} onChange={this.onChangeSelect}>
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
                <ul className="list-Container">
                  {transactionList.map(each => (
                    <TransactionItem
                      key={each.id}
                      data={each}
                      onDeleteTransaction={this.onDeleteTransaction}
                    />
                  ))}
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
