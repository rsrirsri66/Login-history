// App.js
import React, { useState } from 'react';
import Login from './Login';

import Home from './home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <Home setIsLoggedIn={setIsLoggedIn} />}
      {/* You can also add a registration route */}
      {/* {!isLoggedIn && <Register />} */}
    </div>
  );
};

export default App;
