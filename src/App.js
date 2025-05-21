
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AccountSetting from './Pages/AccountSetting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/account-setting' element={<AccountSetting/>} />
      </Routes>
    </Router>
  );
}

export default App;
