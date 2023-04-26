import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendListItem({ friend }) {
  return (
    <>
      <span className={friend.isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={friend.avatar} alt="" width="48" />
      <p className={css.name}>{friend.name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
