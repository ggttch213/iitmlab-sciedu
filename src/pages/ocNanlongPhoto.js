import React from 'react';
import '../css/photo.css'
const OcSixturtlePhoto = () => {
  const image = require.context('../image/Event_0122南隆國中', false, /\.(png|jpg|svg)$/);
  const imagePaths = image.keys().map(image);

  return (
    <div className='gallery'>
      <h1 style={{textAlign:"center",fontSize:"5rem",marginTop:"5rem",color:"#FFC664",fontWeight:"bolder",WebkitTextStroke:"2px black"}}>南隆國中</h1>
      <div className="image-container">
        {imagePaths.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default OcSixturtlePhoto;
