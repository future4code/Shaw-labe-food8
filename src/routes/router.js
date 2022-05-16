import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreenPage from "../pages/HomeScreenPage/HomeScreenPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignUpAdressPage from "../pages/SignUpAdressPage/SignUpAdressPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreenPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/" element={<SignUpPage />} />
        <Route path="/signupAdress" element={<SignUpAdressPage />} />
        <Route path="/feed/" element={<FeedPage />} />
        <Route path="/restaurant/" element={<RestaurantPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}