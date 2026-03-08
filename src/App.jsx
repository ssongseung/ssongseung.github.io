import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Project from "./pages/Project";

function App() {
  return (
   <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Profile />} />
        <Route path="/project" element={<Project />} />
      </Route>
    </Routes>
  )
}

export default App
