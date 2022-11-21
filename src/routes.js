import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Menu, HeaderBanner } from "./components/Header";
import { IndexPage } from "./pages/IndexPage";

export const useRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <header>
              <Header />
              <Menu />
              <HeaderBanner />
            </header>
            <div className="content">
              <IndexPage />
            </div>
          </>
        }
      />
      <Route
        path="/index.html"
        element={
          <>
            <header>
              <Header />
              <Menu />
              <HeaderBanner />
            </header>
            <div className="content">
              <IndexPage />
            </div>
          </>
        }
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
