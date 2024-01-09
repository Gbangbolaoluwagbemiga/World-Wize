import Map from '../components/Map';
import SideBar from '../components/sideBar';
import styles from './AppLayout.module.css';
import ProtectedRoute from './ProtectedRoute';

function AppLayout() {
  return (
    <div className={styles.app}>
      <ProtectedRoute>
        <SideBar />
        <Map />
      </ProtectedRoute>
    </div>
  );
}

export default AppLayout;
