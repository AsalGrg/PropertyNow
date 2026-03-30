import React from 'react'
import './App.css'

import ReactDOM from "react-dom/client";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import UserDashboard from './pages/UserDashboard'
import { BrowserRouter, Route, Routes } from 'react-router'
import { UserContentProvider } from './context/user.context';
const App = () => {

  const root = document.getElementById("root");

  ReactDOM.createRoot(root).render(

    <UserContentProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/dashboard' element={<UserDashboard />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </UserContentProvider>
      
    ,

  );

}

export default App