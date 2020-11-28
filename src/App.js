import './App.css';
import FirebaseContact from './components/FirebaseContact';
import NavbarComponent from './components/Navbar/NavbarComponent.js';
import { HashRouter, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Switch from 'react-bootstrap/esm/Switch';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavbarComponent />
       
        
        <Switch>
        <Route path="/" exact component={HomeScreen}/>
        <Route path="/contact" component={FirebaseContact}/>
        </Switch>
        
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
