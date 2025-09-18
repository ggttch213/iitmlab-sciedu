import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import '../css/iotphoto.css';
import fourinone from "../image/IOT/4合13.png"
import mouse from "../image/IOT/打地鼠.jpg"
import pick from "../image/IOT/點播.png"
import btmusic from "../image/IOT/藍芽音箱.jpg"
import rfid from "../image/IOT/RFID.png"
import Card from 'react-bootstrap/Card';

const OcIoTPhoto = () => {

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
      <h1 style={{textAlign:"center",fontSize:"5rem",marginTop:"2rem",color:"#FFC664",fontWeight:"bolder",WebkitTextStroke:"2px black"}}>IOT教具</h1>
      
      <div className='centered-container2'>
        <Card className="text-center">
        <Card.Header style={{ fontSize: "2.5rem" }}>打地鼠遊戲機</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={mouse} className="custom-img-size" />
            </Card.Body>
        </Card>
      </div>
      <div className='centered-container2'>
        <Card className="text-center">
        <Card.Header style={{ fontSize: "2.5rem" }}>四合一遊戲機</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={fourinone} className="custom-img-size" />
            </Card.Body>
        </Card>
      </div>
      <div className='centered-container2'>
        <Card className="text-center">
        <Card.Header style={{ fontSize: "2.5rem" }}>相片音樂點播機</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={pick} className="custom-img-size" />
            </Card.Body>
        </Card>
      </div>
      <div className='centered-container2'>
        <Card className="text-center">
        <Card.Header style={{ fontSize: "2.5rem" }}>藍芽音箱</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={btmusic} className="custom-img-size" />
            </Card.Body>
        </Card>
      </div>
      <div className='centered-container2'>
        <Card className="text-center">
        <Card.Header style={{ fontSize: "2.5rem" }}>RFID故事播放機</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={rfid} className="custom-img-size" />
            </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default OcIoTPhoto;
