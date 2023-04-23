import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction - history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.capitilize}>{item.type}</td>
            <td className={css.capitilize}>{item.amount}</td>
            <td className={css.capitilize}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
