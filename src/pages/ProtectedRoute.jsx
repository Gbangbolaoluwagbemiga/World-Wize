import {useNavigate} from 'react-router-dom';

function ProtectedRoute({children}) {
  const navigate = useNavigate();

  return <div>{children}</div>;
}

export default ProtectedRoute;
