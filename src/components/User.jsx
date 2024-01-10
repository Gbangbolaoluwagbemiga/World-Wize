import {useEffect} from 'react';
import {useAuth} from '../context/AuthContext';
import styles from './User.module.css';
import {useNavigate} from 'react-router-dom';

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

function User() {
  const {user, userLogout, isAuthenticated} = useAuth();
  const naviagte = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !user.name) naviagte('/');
    },
    [isAuthenticated, user]
  );
  const userDetails = user;

  function handleClick() {
    const logOut = window.confirm('Are you sure you want to Logout?');

    if (logOut) {
      userLogout();
      naviagte('/');
    } else {
      return;
    }
  }
  if (!isAuthenticated) return;

  return (
    <div className={styles.user}>
      <img src={userDetails.avatar} alt={userDetails.name} />
      <span>Welcome, {userDetails.userName[0]}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
