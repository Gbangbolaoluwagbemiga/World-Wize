import SideBar from '../components/sideBar';
import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
    </div>
  );
}

export default AppLayout;
