import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import SignupLogin from "./components/SignupLogin";
import Account from "./components/Account";
import Transactions from "./components/Transactions";
import QRScan from "./components/QRScan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup-login" element={<SignupLogin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/qr-scan" element={<QRScan />} />
      </Routes>
    </Router>
  );
}

export default App;
