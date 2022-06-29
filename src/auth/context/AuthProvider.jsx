import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user
  };
}

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, {}, init);

  const onLogin = (name = '') => {

    const userToLog = { id: 'ABC', name };
    const action = { type: types.login, payload: userToLog };

    localStorage.setItem('user', JSON.stringify(userToLog));

    dispatch(action);
  }

  const onLogout = () => {

    localStorage.removeItem('user');
    const action = {type: types.logout}
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      //methods
      onLogin: onLogin,
      onLogout: onLogout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
