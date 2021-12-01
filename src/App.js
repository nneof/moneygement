import React from 'react';
import LoginForm from './views/LoginForm';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './views/Homepage';
import NotFound from './views/NotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/not_found" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/not_found" />} />
      </Routes>
    </div>
  );
}

export default App;
