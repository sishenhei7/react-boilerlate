import React from 'react';
import './styles/App.scss';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit<code>src/App.tsx</code>and save to reload.
      </p>
      <p>{process.env.REACT_APP_FOO}</p>
    </header>
  </div>
);

export default App;
