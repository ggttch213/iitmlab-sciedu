import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "../css/Plan.css"
import marketIMG from "../image/market2.jpg"
import sixturtle from "../image/六龜高中.jpg"
import nanlong from "../image/南隆國中.jpg"
import meinong from "../image/美濃國中.jpg"
import sixturtleVideo from "../image/sixturtle.mp4"
import nanlongVideo from "../image/nanlong.mp4"
import meinongVideo from "../image/meinong.mp4"
export default function OcPlan() {
  const navigate = useNavigate();

  const handleCarouselItemClick = (targetPage) => {
    // 使用 React Router 導航至目標頁面
    window.scrollTo(0, 0);
    navigate(targetPage);
  };
  return (
    <div>
      
      <div className='centered-container'>
        <Card className="text-center">
          <Card.Header style={{ fontSize: "2.5rem" }}>科普巡演-六龜高中</Card.Header>
          <Card.Body>
          <Card.Text>
          <video width="100%" height="auto" controls>
            <source src={sixturtleVideo} type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
          </Card.Text>
            <Card.Text >
              活動地點：高雄市六龜區六龜高級中學
            </Card.Text>
            <Card.Text >
              活動時間：2023/12/01
            </Card.Text>
            
            <Button variant="primary" onClick={() => handleCarouselItemClick('/ocSixturtlePhoto')}>活動照片</Button>
          </Card.Body>

        </Card>

      </div>
      <div className='centered-container'>
        <Card className="text-center">
          <Card.Header style={{ fontSize: "2.5rem" }}>科普巡演-南隆國中</Card.Header>
          <Card.Body>
          <Card.Text>
          <video width="100%" height="auto" controls>
            <source src={nanlongVideo} type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
          </Card.Text>
            <Card.Text >
              活動地點：高雄市立南隆國民中學
            </Card.Text>
            <Card.Text >
              活動時間：2024/01/22
            </Card.Text>
           
            <Button variant="primary" onClick={() => handleCarouselItemClick('/ocNanlongPhoto')}>活動照片</Button>
          </Card.Body>

        </Card>

      </div>
      <div className='centered-container'>
        <Card className="text-center">
          <Card.Header style={{ fontSize: "2.5rem" }}>科普巡演-美濃國中</Card.Header>
          <Card.Body>
          <Card.Text>
          <video width="100%" height="auto" controls>
            <source src={meinongVideo} type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
          </Card.Text>
            <Card.Text >
              活動地點：高雄市立美濃國民中學
            </Card.Text>
            <Card.Text >
              活動時間：2024/01/24
            </Card.Text>
            
            <Button variant="primary" onClick={() => handleCarouselItemClick('/ocMeinongPhoto')}>活動照片</Button>
          </Card.Body>

        </Card>

      </div>
    </div>

  )
}