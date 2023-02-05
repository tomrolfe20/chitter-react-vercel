import './App.css';
import RoutesApp from './routes';
import { AppContext } from './lib/contextLib';
import { useState } from 'react';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [reload, setReload] = useState(false);
  console.log('user authenticated: ', isAuthenticated);
  console.log('user details: ', user);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        userHasAuthenticated,
        user,
        setUser,
        reload,
        setReload,
      }}
    >
      <RoutesApp />
    </AppContext.Provider>
  );
}

export default App;
