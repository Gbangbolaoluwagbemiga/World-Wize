import {useEffect} from 'react';
import {useAuth} from '../context/AuthContext';
import styles from './User.module.css';

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

function User() {
  const {user, userLogout, isAuthenticated} = useAuth();

  useEffect(
    function () {
      user;
      isAuthenticated;
    },
    [isAuthenticated, user]
  );
  const userDetails = user;

  console.log(userDetails, isAuthenticated);

  function handleClick() {
    userLogout();
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

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
