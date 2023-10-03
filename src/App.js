import './App.css'

import { Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/register/RegisterPage'
import SelectCategory from './pages/selectCategory/SelectCategory'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/select-category' element={<SelectCategory/>} />
      </Routes>
    </div>
  );
}

export default App;
