import React from 'react';
import './Collection.css'; // Import your CSS file for styling
import nft1 from "../images/NFT1.jpg";
import nft2 from "../images/NFT2.jpg";
import nft3 from "../images/NFT3.jpg";
import nft4 from "../images/NFT4.jpg";
import nft5 from "../images/NFT5.jpg";
import nft6 from "../images/NFT6.jpg";
import nft7 from "../images/NFT7.jpg";
import nft8 from "../images/NFT8.jpg";
import nft9 from "../images/NFT9.jpg";
import nft10 from "../images/NFT10.jpg";
import nft11 from "../images/NFT11.jpg";
import nft12 from "../images/NFT12.jpg";


const Collection = () => {

  const nftData = [
    { id: 1, image: nft1, title: 'Monley 1' },
    { id: 2, image: nft2, title: 'Monley 2' },
    { id: 1, image: nft3, title: 'Monley 3' },
    { id: 2, image: nft4, title: 'Monley 4' },
    { id: 1, image: nft5, title: "Dayco serpentine belt" },
    { id: 2, image: nft6, title: 'Dayco serpentine belt' },
    { id: 1, image: nft7, title: 'Dayco serpentine belt' },
    { id: 2, image: nft8, title: 'Dayco serpentine belt' },
    { id: 9, image: nft9, title: 'Preatent 1' },
    { id: 10, image: nft10, title: 'Preatent 2' },
    { id: 11, image: nft11, title: 'Preatent 3' },
    { id: 12, image: nft12, title: 'Preatent 4' },
  
  ];

  return (
    <div className="nft-collection-container">
      <h2>Collection of NFTs</h2>
      <div className="nft-cards">
        {nftData.map((nft) => (
          <div className="nft-card" key={nft.id}>
            <img src={nft.image} alt={nft.title} />
            <p>{nft.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
