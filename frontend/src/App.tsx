import { useState } from 'react';
import React from 'react';
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"
import EnterDetailsPage from "../pages/EnterDetailsPage"
import EditDetailsPage from "../pages/EditDetailsPage"


import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route 
          path='/' 
          element={<Navigate to='/login' replace/>}
        />

        <Route 
          path='/login' 
          element={<LoginPage/>}
        />

        <Route 
          path='/profile' 
          element={<ProfilePage/>}
        />

        <Route 
          path='/enter-details' 
          element={<EnterDetailsPage/>}
        />

        <Route 
          path='/edit-details' 
          element={<EditDetailsPage/>}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
