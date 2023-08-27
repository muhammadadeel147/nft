import './App.css';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import {Route,Routes,} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </div>
  );
}



export default App;
