import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';

import UserCreate from './pages/UserCreate';



import './App.css'
import UserConection from './pages/UserConection';

function App() {
  

  return (
    <>

      <HashRouter>

        <Routes>

        <Route path="/" element={<Login />} />

					<Route path="/me" element={<UserConection />} />
					<Route path="/create" element={<UserCreate />} />
					
        
        </Routes>

      </HashRouter>
    </>
  )
}

export default App

