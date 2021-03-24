
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import Formation from './components/Formation'
import SingleFormation from "./components/SingleFormation"
import { Container } from 'react-bootstrap'
function App() {
  return (
    <Router>
      <header >
        <Header/>
        <main className="py-3">
          <Container>
            <Route path="/Home" component={Home} exact/>
            <Route path="/Formation & Certification" component={Formation} />
            <Route path="/Formation/:id" component={SingleFormation} />
          </Container>
        </main>
        <Footer/>
      
      </header>
    </Router>
  );
}

export default App;
