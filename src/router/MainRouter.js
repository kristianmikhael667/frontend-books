import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "../views/container/CategoryPage";
import DetailBookPage from "../views/container/DetailBookPage";
import HistoryPage from "../views/container/HistoryPage";
import HomePage from "../views/container/HomePage";
import InputSample from "../views/container/InputSample";
import LoginPage from "../views/container/LoginPage";
import MostRatingPage from "../views/container/MostRatingPage";
import MostViewPage from "../views/container/MostViewPage";
import NewBookPage from "../views/container/NewBookPage";
import SamplePage from "../views/container/SamplePage";
import SamplePageDetail from "../views/container/SamplePageDetail";
import NotFound from "../views/templates/NotFound";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        {/* Sample Page Route */}
        <Route exact path="sample-page" element={<SamplePage />} />
        <Route path="sample-page/:companyId" element={<SamplePageDetail />} />
        <Route exact path="input-data" element={<InputSample />} />

        {/* Base Route */}
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/mostview" element={<MostViewPage />} />
        <Route exact path="/mostrating" element={<MostRatingPage />} />
        <Route exact path="/newbook" element={<NewBookPage />} />
        <Route path="/category/:uid" element={<CategoryPage />} />
        <Route path="/books/:slug" element={<DetailBookPage />} />
        <Route path="/history" element={<HistoryPage />} />

        {/* Page Login */}
        <Route exact path="/login" element={<LoginPage />} />

        {/* NotFound Page Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
