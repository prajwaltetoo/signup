import React, { useState } from 'react';
import Login from './Login';
import Profile from './Profile';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Profile userId={user.id} />
      )}
    </div>
  );
};

export default App;
