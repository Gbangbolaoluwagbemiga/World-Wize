import {createContext, useContext} from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
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

const user = {
  name: '',
  email: '',
  password: '',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

function AuthProvider({children}) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error(`AuthContext was used outside AuthProvider `);
  return context;
}

export {AuthProvider, useAuth};
