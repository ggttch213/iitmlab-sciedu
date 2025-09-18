import React from "react";
import navLOGO from "./image/翩科LOGO.jpg";
import navHome from "./image/navbar/home.png";
import navPlan from "./image/navbar/plan.png";
import navVid from "./image/navbar/video.png";
import navPho from "./image/navbar/photo.png";
import navMem from "./image/navbar/member.png";
import "./css/Navbar.css";
import { Link } from "react-router-dom";


function NavScrollExample() {
  return (
    <div className="navbarrr px-3 py-2">
      <div className="container d-flex flex-wrap align-items-center justify-content-center ">
        <Link to="ocHome" className="d-flex align-items-center my-2 my-lg-0 text-white text-decoration-none ">
          <img className="navlogo" src={navLOGO} alt="Logo" height="60" />
          <h3 className="ocTitle">想享科技翩翩起舞,特色偏鄉教育扎根</h3>
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </Link>

        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
          <li>
            <Link to="ocHome" className="nav-link d-flex align-items-center">
              <img src={navHome} alt="Icon" className="me-1" width="40" height="40px" />
              <span>首頁</span>
            </Link>
          </li>
          <li>
            <Link to="ocplan" className="nav-link d-flex align-items-center">
              <img src={navPlan} alt="Icon" className="me-1" width="40" height="40px" />
              <span>活動規劃</span>
            </Link>
          </li>
          <li>
            <Link to="ocvideo" className="nav-link d-flex align-items-center">
              <img src={navVid} alt="Icon" className="me-1" width="40" height="40px" />
              <span>活動影片</span>
            </Link>
          </li>
          <li>
            <Link to="ocphoto" className="nav-link d-flex align-items-center">
              <img src={navPho} alt="Icon" className="me-1" width="40" height="40px" />
              <span>活動作品</span>
            </Link>
          </li>
          <li>
            <Link to="ocmember" className="nav-link d-flex align-items-center">
              <img src={navMem} alt="Icon" className="me-1" width="40" height="40px" />
              <span>成員介紹</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavScrollExample;
