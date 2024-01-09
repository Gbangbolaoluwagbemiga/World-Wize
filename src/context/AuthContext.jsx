import {createContext, useContext, useReducer} from 'react';

const AuthContext = createContext();

const user = {
  name: '',
  email: '',
  password: '',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

const initialState = {
  user: user,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return {...state, user: action.payload, isAuthenticated: true};
    case 'logout':
      return {...state, user: null, isAuthenticated: false};
    default:
      throw new Error('Unknown action');
  }
}

function AuthProvider({children}) {
  const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState);

  function userLogin(userDetails) {
    if (!userDetails) return;
    dispatch({type: 'login', payload: userDetails});
  }

  function userLogout() {
    dispatch({type: 'logout'});
  }

  return (
    <AuthContext.Provider
      value={{userLogin, userLogout, user, isAuthenticated}}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error(`AuthContext was used outside AuthProvider `);
  return context;
}

export {AuthProvider, useAuth};
