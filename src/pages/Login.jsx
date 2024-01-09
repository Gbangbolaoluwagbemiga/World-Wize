import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Login.module.css';
import PageNav from '../components/PageNav';
import Button from '../components/Button';
import {useAuth} from '../context/AuthContext';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const avatar = 'https://i.pravatar.cc/100?u=zz';
  const {userLogin} = useAuth();

  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  function togglePasswordVisibility() {
    setShowPassword(prev => !prev);
  }

  function handleUserDetails(e) {
    if (!userName || !password.length) return;
    e.preventDefault();
    console.log('HIII');
    userLogin({userName, password, avatar});
    navigate('/');
  }

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            placeholder="williams philip"
            onChange={e => setUserName(e.target.value)}
            value={userName}
            required={true}
          />
        </div>
        {/* <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="philip@gmail.com"
            onChange={e => setEmail(e.target.value)}
            value={email}
            required={true}
          />
        </div> */}

        <div className={styles.row}>
          <label htmlFor="password">Password</label>

          <input
            type={showPassword ? 'password' : 'text'}
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            minLength={6}
            required={true}
          />
          <span
            className={styles.visibility}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? '👁️' : <strike>👁️</strike>}
          </span>
        </div>

        <div>
          <Button type={'primary'} onclick={handleUserDetails}>
            Login{' '}
          </Button>
        </div>
      </form>
    </main>
  );
}
