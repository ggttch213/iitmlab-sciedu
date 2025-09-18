
import OceanIOT from '../image/oceanIOT.jpg';
import marketIMG from "../image/market2.jpg";
import noAct from "../image/none.png";
import sixturtle from "../image/六龜高中.jpg"

import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import nanlong from "../image/南隆國中.jpg"
import meinong from "../image/美濃國中.jpg"

function OcHome() {
  const navigate = useNavigate();

  const handleCarouselItemClick = (targetPage) => {
    // 使用 React Router 導航至目標頁面
    window.scrollTo(0, 0);
    navigate(targetPage);

  };
  return (
    <div className="App">
      <Carousel>
        
        <Carousel.Item onClick={() => handleCarouselItemClick('/ocMarketPhoto')} on>
          <img
            className="carousel1 d-block "
            src={marketIMG}
            alt="First slide"
          />
          <Carousel.Caption >

            <h3 style={{ fontSize: "36px", color: "rgba(100, 151, 201, 0.676)", fontWeight: "bolder" }}>科普市集11/4&5</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => handleCarouselItemClick('/ocSixturtlePhoto')} on>
          <img
            className="carousel1 d-block "
            src={sixturtle}
            alt="First slide"
          />
          <Carousel.Caption >
            <h3 style={{ fontSize: "36px", color: "rgba(100, 151, 201, 0.676)", fontWeight: "bolder" }}>六龜高中12/1</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item onClick={() => handleCarouselItemClick('/ocNanlongPhoto')} on>
          <img
            className="carousel1 d-block "
            src={nanlong}
            alt="First slide"
          />
          <Carousel.Caption >

            <h3 style={{ fontSize: "36px", color: "rgba(100, 151, 201, 0.676)", fontWeight: "bolder" }}>南隆國中1/22</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => handleCarouselItemClick('/ocMeinongPhoto')} on>
          <img
            className="carousel1 d-block "
            src={meinong}
            alt="First slide"
          />
          <Carousel.Caption >

            <h3 style={{ fontSize: "36px", color: "rgba(100, 151, 201, 0.676)", fontWeight: "bolder" }}>美濃國中1/24</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <div className='d-flex'>
        <Card >
          <Card.Img variant="top" src={marketIMG} />
          <Card.Body>
            <Card.Title ><h3>2023年11月4&5日</h3></Card.Title>
            <Card.Title ><h3>科普市集</h3></Card.Title>
            <Card.Text>
              於科學工藝博物館舉辦的科普市集，眾多學術單位共參與之展覽市集。
            </Card.Text>
            <Button className='but1' variant="primary" onClick={() => handleCarouselItemClick('/ocMarketPhoto')}>查看更多</Button>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src={sixturtle}  />
          <Card.Body>
          <Card.Title ><h3>2023年12月1日</h3></Card.Title>
            <Card.Title><h3>六龜高中</h3></Card.Title>
            <Card.Text>
              科普巡迴於六龜區的六龜高級中學，進行海洋科普教育相關活動展覽。
            </Card.Text>
            <Button className='but1' variant="primary" onClick={() => handleCarouselItemClick('/ocSixturtlePhoto')}>查看更多</Button>
          </Card.Body>

        </Card>
        <Card >
          <Card.Img variant="top" src={nanlong} />
          <Card.Body>
          <Card.Title ><h3>2024年01月22日</h3></Card.Title>
            <Card.Title><h3>南隆國中</h3></Card.Title>
            <Card.Text>
            科普巡迴於美濃區的南隆國民中學，進行海洋科普教育相關活動展覽。
            </Card.Text>
            <Button className='but1' variant="primary" onClick={() => handleCarouselItemClick('/ocNanlongPhoto')}>查看更多</Button>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src={meinong} />
          <Card.Body>
          <Card.Title ><h3>2024年01月24日</h3></Card.Title>
            <Card.Title><h3>美濃國中</h3></Card.Title>
            <Card.Text>
            科普巡迴於美濃區的美濃國民中學，進行海洋科普教育相關活動展覽。
            </Card.Text>
            <Button className='but1' variant="primary" onClick={() => handleCarouselItemClick('/ocMeinongPhoto')}>查看更多</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default OcHome;