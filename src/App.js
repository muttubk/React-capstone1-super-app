import './App.css'

import { Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/register/RegisterPage'
import SelectCategory from './pages/selectCategory/SelectCategory'
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/select-category' element={<SelectCategory/>} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
