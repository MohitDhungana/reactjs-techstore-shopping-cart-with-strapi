import React from 'react';

const UserContext = React.createContext();

const getUserFromLocalStorage = () => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : { username: null, token: null };
};

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(getUserFromLocalStorage());
  //   const [user, setUser] = React.useState({ username: null, token: null });

  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem('user');
  };

  const [alert, setAlert] = React.useState({
    show: false,
    msg: '',
    type: 'success',
  });

  const showAlert = ({ type = 'success', msg }) => {
    setAlert({ show: true, msg, type });
  };

  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <UserContext.Provider
      value={{ user, userLogin, userLogout, alert, showAlert, hideAlert }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
