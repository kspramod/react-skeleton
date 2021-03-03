import Dashboard from './containers/Dashboard';

import logo from '../assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Sample React Skeleton
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
