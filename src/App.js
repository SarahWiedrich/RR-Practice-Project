import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

import Home from './components/Home'
import About from './components/About'
import Amenities from './components/Amenities'
import Pricing from './components/Pricing'


function App() {

  const pricing = ['Water and Electric: $40/night', 'Full Hookups: $60/night']
  const amenities = ['Free hot showers', 'Pool with waterslide', 'Splash pad', 'Mini golf', 'Jumping pillow']

  return (
    <div className="App">
        <header className="App-header">
          <h1 className="title">Welcome to our campground</h1>
        </header>
        <BrowserRouter>
          <Nav variant='tabs' fill>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/amenities">Amenities</Link>
              <Link href="/pricing">Pricing</Link>
          </Nav>

          <div className="display">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/amenities" render={() => <Amenities amenities={amenities}/>}  />
              <Route path="/pricing" render={() => <Pricing pricing={pricing}/>}  />
            </Routes> 
          </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
