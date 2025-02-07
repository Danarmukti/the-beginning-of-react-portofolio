import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import Details from "./pages/DetailPortofolio";
import Experience from "./pages/experience";
import NotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/the-beginning-of-react-portofolio/">
      <Routes>
        <Route path="/the-beginning-of-react-portofolio/" element={<Home />}></Route>
        <Route path="/portofolio/:id" element={<Details />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/404Page-Not-Found" element={<NotFound />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
