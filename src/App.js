import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Main/>
      
      {/* <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/portfolio" component={Portfolio}/>
        </Switch>
        <Footer/>
      </Router> */}
    </div>
  );
}

export default App;
