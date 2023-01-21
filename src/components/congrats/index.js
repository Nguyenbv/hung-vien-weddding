import "./index.scss";
import React from "react";
const Congrats = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get("location") || "nha-trai";
  if (location === 'nha-trai') {
    return (
      <div class="qr-code">
        <img alt='QR Nhà Trai' src='/images/invitation/nha-trai-qr.png'/>
      </div>
    );
  } else {
    return (
      <div class="qr-code">
        <img alt='QR Nhà Gái' src='/images/invitation/nha-gai-qr.png'/>
      </div>
    );
  }
};
export default React.memo(Congrats);
