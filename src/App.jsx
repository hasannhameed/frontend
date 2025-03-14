import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pagess/Home/Home";
import Login from "./pagess/Login/Login";
import Player from "./pagess/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLoding } from "react-icons/fa";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);


  return (
    loading?<div className="text-center mt-5">< FaLoding /></div> : <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        <Route path="/player" element={isAuthenticated ? <Player /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
