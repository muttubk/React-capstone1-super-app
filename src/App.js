import './App.css'

import { Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/register/RegisterPage'
import SelectCategory from './pages/selectCategory/SelectCategory'
import HomePage from './pages/home/HomePage'
import EntertainmentPage from './pages/entertainment/EntertainmentPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/select-category' element={<SelectCategory/>} />
        <Route path='/' element={<HomePage />} />
        <Route path='/entertainment' element={<EntertainmentPage/>} />
      </Routes>
    </div>
  );
}

export default App;
