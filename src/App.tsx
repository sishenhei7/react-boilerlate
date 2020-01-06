import React from 'react';
import { Button } from 'antd';
import './styles/App.scss';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <Button type="primary">Button</Button>
      <p>
        Edit<code>src/App.tsx</code>and save to reload.
      </p>
      <p>{process.env.REACT_APP_FOO}</p>
    </header>
  </div>
);

export default App;
