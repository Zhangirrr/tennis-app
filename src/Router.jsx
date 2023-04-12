import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home page</div>}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/news" element={<NewsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
