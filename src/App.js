import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<View/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
