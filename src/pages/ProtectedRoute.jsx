import {useNavigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

function ProtectedRoute({children}) {
  const navigate = useNavigate();
  const {isAuthenticated} = useAuth();

  return <div>{children}</div>;
}

export default ProtectedRoute;
