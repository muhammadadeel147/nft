import React from 'react';
import './SellNft.css'; // Import your CSS file for styling

const SellNft = () => {
    const steps = [
        {
          id: 1,
          title: 'Step Up Your Wallet',
          description: 'Connect your preferred wallet to get started.',
          bgColor: '#FF98A8', // Light pink background
        },
        {
          id: 2,
          title: 'Sell Your NFT',
          description: 'List your NFT for sale on the marketplace.',
          bgColor: '#A52489', // Purple background
        },
        {
          id: 3,
          title: 'Create Your Collection',
          description: 'Curate a collection of your unique NFTs.',
          bgColor: '#51117F', // Dark purple background
        },
        {
          id: 4,
          title: 'Add Your NFT',
          description: 'Upload your NFT and set its details.',
          bgColor: '#6F249A', // Darker purple background
        },
      ];
    
      return (
        <div className="create-sell-nfts-container">
          <h2>Create and Sell Your NFTs</h2>
          <div className="steps">
            {steps.map((step) => (
              <div className="step" key={step.id} style={{ backgroundColor: step.bgColor }}>
                <h3>Step {step.id}</h3>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    
export default SellNft;
