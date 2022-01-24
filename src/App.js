//PACKAGES
import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
//COMPONENTS
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
//PAGES
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Nfts from "./pages/Nfts";
import SellNftForm from "./pages/SellNfts";
import BuyNft from "./pages/BuyNfts";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Nfts />} />
        <Route path="/nfts/:id/sell" element={<SellNftForm />} />
        <Route path="/nfts/:id/buy" element={<BuyNft />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
