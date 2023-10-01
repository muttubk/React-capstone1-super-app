import './App.css'

import { Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/register/RegisterPage'
import Page2 from './pages/page2/Page2'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RegisterPage/>} />
        <Route path='/category' element={<Page2/>} />
      </Routes>
    </div>
  );
}

export default App;
