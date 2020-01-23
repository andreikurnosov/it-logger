import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

function App() {
  useEffect(() => {
    // init materialize js
    M.AutoInit();
  })
  return (
    <div>
      app <i className="material-icons">adb</i>
    </div>
  );
}

export default App;
