import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="transaction-Item-Container">
      <div className="money-Container balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="imageEle"
        />
        <div className="money-Info-Container">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs: {balance}</p>{' '}
          {/* Correct testid */}
        </div>
      </div>

      <div className="money-Container income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="imageEle"
        />
        <div className="money-Info-Container">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs: {income}</p>{' '}
          {/* Added testid for income */}
        </div>
      </div>

      <div className="money-Container expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="imageEle"
        />
        <div className="money-Info-Container">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs: {expenses}</p>{' '}
          {/* Added testid for expenses */}
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
