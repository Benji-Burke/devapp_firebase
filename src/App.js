import logo from './logo.svg';
import './App.css';
import FirebaseContact from './components/FirebaseContact';
import NavbarComponent from './components/Navbar/NavbarComponent.js';
import { HashRouter} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavbarComponent />
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        

        <FirebaseContact />
      </div>
    </HashRouter>
  );
}

export default App;
