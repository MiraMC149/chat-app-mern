import React, { useState } from 'react';
import Login from './pages/Login';
import ChatPage from './pages/ChatPage';
import PrivateRoute from './components/PrivateRoute';
import Error from './pages/Error';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <GoogleOAuthProvider clientId="1044973150940-nbnv7os2k2vf1pgbn2vf8p9cakdd0kq8.apps.googleusercontent.com">
      <div className="w-full h-screen">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Login setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/main"
              element={
                isAuthenticated ? (
                  <ChatPage setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;