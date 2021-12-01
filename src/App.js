import React from 'react';
import LoginForm from './views/LoginForm';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './views/Homepage';
import Expenses from './views/Expenses';
import ShoppingList from './views/ShoppingList';
import Notes from './views/Notes';
import Settings from './views/Settings';
import NotFound from './views/NotFound';
import './index.css';

function App() {
  return (
    <div className="global">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/shopping_list" element={<ShoppingList />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/not_found" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/not_found" />} />
      </Routes>
    </div>
  );
}

export default App;
