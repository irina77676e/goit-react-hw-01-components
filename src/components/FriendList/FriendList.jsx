import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.item}>
            <span className={friend.isOnline ? css.online : css.offline}></span>
            <img className={css.avatar} src={friend.avatar} alt="" width="48" />
            <p className={css.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
