
import { Card  } from "react-bootstrap";
import "./css/footer.css";
import IYBSSD from "./image/IYBSSD.png"
import NKUST from "./image/NKUST.png"
import NSTC from "./image/NSTC.png"

function Footer() {
  return (
    <div>
<div className="centered-container">
    <Card className="footerCard ">
    <Card.Img src={IYBSSD} className="IYBSSD" />
    <Card.Img src={NKUST} className="NKUST"/>
    <Card.Img  src={NSTC} className="NSTC"/>
    </Card>

    </div>

   
    </div>

  );
}

export default Footer;
