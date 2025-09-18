import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import '../css/photo.css'

const OcPhoto = () => {
  const image = require.context('../image/Item', false, /\.(png|jpg|svg)$/);
  const imagePaths = image.keys().map(image);

  return (
    <div className='gallery'>
      <div style={{textAlign: "center", marginTop: "2rem"}}>
        <Link to="/ocphoto">
          <button style={{fontSize: "1.5rem", margin: "0 1rem", padding: "0.5rem 1rem", backgroundColor: "#FFC664", border: "none", borderRadius: "5px", cursor: "pointer",fontWeight:"bolder"}}>
            活動道具
          </button>
        </Link>
        <Link to="/ocIoTPhoto">
          <button style={{fontSize: "1.5rem", margin: "0 1rem", padding: "0.5rem 1rem", backgroundColor: "#FFC664", border: "none", borderRadius: "5px", cursor: "pointer",fontWeight:"bolder"}}>
            IOT教具
          </button>
        </Link>
      </div>
      <h1 style={{textAlign:"center",fontSize:"5rem",marginTop:"2rem",color:"#FFC664",fontWeight:"bolder",WebkitTextStroke:"2px black"}}>活動道具</h1>
      <div className="image-container">
        {imagePaths.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default OcPhoto;
