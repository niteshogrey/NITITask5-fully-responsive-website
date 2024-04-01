import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import Login from './components/login/Login';
import Featured from './components/featured/Featured';
import Register from './components/register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/featured' Component={Featured} />

      </Routes>
    </Router>
  );
}

export default App;
