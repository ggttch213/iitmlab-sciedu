import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "../css/Plan.css"
import marketIMG from "../image/market2.jpg"
import sixturtle from "../image/六龜高中.jpg"
import nanlong from "../image/南隆國中.jpg"
import meinong from "../image/美濃國中.jpg"

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
          <Card.Header style={{ fontSize: "2.5rem" }}>第四屆臺灣科學節-科普市集</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={marketIMG} />
            <Card.Text >
              活動地點：國立科學工藝博物館
            </Card.Text>
            <Card.Text >
              活動時間：2023/11/05~2023/11/06
            </Card.Text>
            <Card.Text>
              活動內容：每年於科學工藝博物館舉辦的科普市集，眾多學術單位共同參與之展覽市集。
            </Card.Text>
            <Button variant="primary" onClick={() => handleCarouselItemClick('/ocMarketPhoto')}>活動照片</Button>
            <Button variant="primary" onClick={() => handleCarouselItemClick('/ocvideo')}style={{margin:"5px"}}>活動影片</Button>
          </Card.Body>

        </Card>

      </div>
      <div className='centered-container'>
        <Card className="text-center">
          <Card.Header style={{ fontSize: "2.5rem" }}>科普巡演-六龜高中</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={sixturtle} />
            <Card.Text >
              活動地點：高雄市六龜區六龜高級中學
            </Card.Text>
            <Card.Text >
              活動時間：2023/12/01
            </Card.Text>
            <Card.Text>
              活動內容：科普巡迴於六龜區的六龜高級中學，進行海洋科普教育相關活動展覽。
            </Card.Text>
            <Button variant="primary" onClick={() => handleCarouselItemClick('/ocSixturtlePhoto')}>活動照片</Button>
            <Button variant="primary" onClick={() => handleCarouselItemClick('/ocvideo')}style={{margin:"5px"}}>活動影片</Button>
          </Card.Body>

        </Card>

      </div>
      <div className='centered-container'>
        <Card className="text-center">
          <Card.Header style={{ fontSize: "2.5rem" }}>科普巡演-南隆國中</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={nanlong} />
            <Card.Text >
              活動地點：高雄市立南隆國民中學
            </Card.Text>
            <Card.Text >
              活動時間：2024/01/22
            </Card.Text>
            <Card.Text>
              活動內容：科普巡迴於美濃區的南隆國民中學，進行海洋科普教育相關活動及IOT教具、無人飛行機等相關展覽。
            </Card.Text>
            <Button variant="primary" onClick={() => handleCarouselItemClick('/ocNanlongPhoto')}>活動照片</Button>
            <Button variant="primary" onClick={() => handleCarouselItemClick('/ocvideo')}style={{margin:"5px"}}>活動影片</Button>
          </Card.Body>

        </Card>

      </div>
      <div className='centered-container'>
        <Card className="text-center">
          <Card.Header style={{ fontSize: "2.5rem" }}>科普巡演-美濃國中</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={meinong} />
            <Card.Text >
              活動地點：高雄市立美濃國民中學
            </Card.Text>
            <Card.Text >
              活動時間：2024/01/24
            </Card.Text>
            <Card.Text>
              活動內容：科普巡迴於美濃區的美濃國民中學，進行海洋科普教育相關活動及IOT教具、無人飛行機等相關展覽。
            </Card.Text>
            <Button variant="primary" onClick={() => handleCarouselItemClick('/ocMeinongPhoto')}>活動照片</Button>
            <Button variant="primary" onClick={() => handleCarouselItemClick('/ocvideo')}style={{margin:"5px"}}>活動影片</Button>
          </Card.Body>

        </Card>

      </div>
    </div>

  )
}