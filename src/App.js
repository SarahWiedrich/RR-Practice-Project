import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import Home from './components/Home'
import About from './components/About'
import Amenities from './components/Amenities'
import Pricing from './components/Pricing'


function App() {

  const pricing = ['Water and Electric: $40/night', 'Full Hookups: $60/night']
  const amenities = ['Free hot showers', 'Pool with waterslide', 'Splash pad', 'Mini golf', 'Jumping pillow']

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="title">Welcome to our campground</h1>
          <Container fluid>
          <Nav variant='tabs' fill>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/amenities">Amenities</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/pricing">Pricing</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>

        <div className="display">
          <Routes>
            <Route path="/" component={<Home/>} />
            <Route path="/about" component={<About/>} />
            <Route path="/amenities" render={() => <Amenities amenities={amenities}/>}  />
            <Route path="/pricing" render={() => <Pricing pricing={pricing}/>}  />
          </Routes>
        </div>

      </Router>  
    </div>
  );
}

export default App;
