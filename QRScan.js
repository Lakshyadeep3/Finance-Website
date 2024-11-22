import React from "react";
import QRCode from "qrcode.react";

function QRScan() {
  const userId = "exampleUserId123"; // Dynamic user ID
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Scan this QR Code to Pay</h1>
      <QRCode value={userId} size={200} />
    </div>
  );
}

export default QRScan;
