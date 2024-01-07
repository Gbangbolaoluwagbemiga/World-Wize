import {createContext, useContext} from 'react';

const AuthContext = createContext();
const user = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
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
