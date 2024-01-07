import {useState} from 'react';
import styles from './Login.module.css';
import PageNav from '../components/PageNav';
import Button from '../components/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  function togglePasswordVisibility() {
    setShowPassword(prev => !prev);
  }

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="philip@gmail.com"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>

          <input
            type={showPassword ? 'password' : 'text'}
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <span
            className={styles.visibility}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? '👁️' : <strike>👁️</strike>}
          </span>
        </div>

        <div>
          <Button type={'primary'}>Login</Button>
        </div>
      </form>
    </main>
  );
}
