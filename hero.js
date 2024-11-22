import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Simple. Secure. Anywhere.</h1>
      <p>Send and receive money instantly, track transactions, and manage accounts effortlessly.</p>
      <Link to="/signup-login">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Get Started</button>
      </Link>
    </div>
  );
}

export default Hero;
