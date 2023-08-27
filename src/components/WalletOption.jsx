import React from 'react';
import './WalletOption.css'; // Import your CSS file for styling
import img1 from "../images/7.png"
import img2 from "../images/8.png"
import img3 from "../images/3.png"
import img4 from "../images/4.png"
import img5 from "../images/5.png"
import img6 from "../images/6.png"

const WalletOption = () => {
  return (
    <div className="wallet-options-container">
      <h2>Choose Your Wallet</h2>
      <div className="wallet-cards">
        <div className="wallet-card">
          <img src={img1} alt="Metamask" />
          <p>Metamask</p>
        </div>
        <div className="wallet-card">
          <img src={img2} alt="Bitski" />
          <p>Bitski</p>
        </div>
        <div className="wallet-card">
          <img src={img3} alt="Fortmatic" />
          <p>Fortmatic</p>
        </div>
        <div className="wallet-card">
          <img src={img4} alt="WalletConnect" />
          <p>WalletConnect</p>
        </div>
        <div className="wallet-card">
          <img src={img5} alt="Coinbase Wallet" />
          <p>Coinbase Wallet</p>
        </div>
        <div className="wallet-card">
          <img src={img6} alt="Arkane" />
          <p>Arkane</p>
        </div>
      </div>
    </div>
  );
};

export default WalletOption;
