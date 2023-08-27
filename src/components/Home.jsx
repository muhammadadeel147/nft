import React from 'react';
import './Home.css'; // Import your CSS file for styling
import igm1 from "../images/2.PNG"
import WalletOptions from './WalletOption';
import Collection from './Collection';
import SellNft from './SellNft';
const Home = () => {
  return (
   <>  
   <div className="homepage-container">
      <div className="content-container">
        <div className="image-container">
          <img src={igm1} alt="NFT Monkey" />
        </div>
        <div className="text-container">
          <h2>Discover, Collect & Sell Extraordinary NFTs</h2>
          <p>
            The Crypto Monkey is a high-quality collection of 100 unique monkeys on the NFTMart marketplace.
          </p>
          <button className="discover-button">Discover More</button>
        </div>
      </div>
      
    </div>
    <WalletOptions/>
    <Collection/>
    <SellNft/>
   
    </>
  );
};

export default Home;
