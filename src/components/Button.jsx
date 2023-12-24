import styles from './Button.module.css';

function Button({children, onclick, type}) {
  return (
    <button onClick={() => onclick} className={styles.btn}>
      {children}
    </button>
  );
}

export default Button;
