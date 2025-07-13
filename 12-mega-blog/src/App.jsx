import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice';
import { header, footer } from './components';
import { Outlet } from 'react-router-dom'; // Assuming you're using react-router for routing


function App() {


  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }})
      .catch(error => {
        console.error("Error fetching current user:", error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);


  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-100 text-gray-900">
      <div className='block w-full'>
        <header />
        <main>
          TODO:{/* <outlet /> */}
        </main>
        <footer />
      </div>
    </div>
  ) : (
    <div className="loading">
      <p>Loading...</p>
    </div>
  );
}

export default App
