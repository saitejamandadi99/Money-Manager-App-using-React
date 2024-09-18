// Write your code here
import './index.css'
const TransactionItem = props => {
  const {data} = props
  const {title, amount, optValue} = data
  return (
    <li>
      <p>{title}</p>
      <p>Rs:{amount}</p>
      <p>{optValue}</p>
      <button type="button">
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
