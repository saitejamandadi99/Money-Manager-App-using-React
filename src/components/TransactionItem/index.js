import './index.css'

// Array of transaction type options
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

const TransactionItem = props => {
  const {data, onDeleteTransaction} = props
  const {id, title, amount, optValue} = data

  // Mapping optionId to displayText
  const getTransactionTypeText = optionId => {
    const transactionType = transactionTypeOptions.find(
      type => type.optionId === optionId,
    )
    return transactionType ? transactionType.displayText : optionId
  }

  const onClickDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li>
      <p>{title}</p>
      <p>Rs:{amount}</p>
      <p>{getTransactionTypeText(optValue)}</p>
      <button type="button" onClick={onClickDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="buttonEle"
        />
      </button>
    </li>
  )
}

export default TransactionItem
