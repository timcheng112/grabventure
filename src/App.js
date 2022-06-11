import logo from './logo.svg';
import './App.css';
import Preferences from './pages/Preferences/Preferences';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>GrabVenture</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          start
        </a>
      </header>
    </div>
  );
}

export default App;
