import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Students from './Components/Students/Students';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/*" element={<NotFound />} />
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home />} />
              <Route path="/students" element={<Students />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/*" element={<Dashboard/>} />
            </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
