import React from 'react';
import market from "../image/market4.jpg";
import teacher1 from "../image/廖奕雯.jpg"; 
import teacher2 from "../image/回怡雯.jpg";
import teacher3 from "../image/林思妤.jpg";
import teacher4 from "../image/利錫雨.jpg";
import student1 from "../image/蔡旻芸.jpg";
import student2 from "../image/林晉丞.png";
import student3 from "../image/梁雅涵.jpg";
import "../css/member.css";

const members = [
  {
    id: 1,
    name: '林晉丞',
    title: '學生',
    image: student2,
    description: '任職：國立高雄科技大學',
    description2: '科系：智慧商務系',
    description3: '職稱：學生',
    description4: '專業：前端網頁設計'
  },
  {
    id: 2,
    name: '梁雅涵',
    title: '學生',
    image: student3,
    description: '任職：國立高雄科技大學',
    description2: '科系：智慧商務系',
    description3: '職稱：學生',
    description4: '專業：系統設計'
  },
  {
    id: 3,
    name: '蔡旻芸',
    title: '學生',
    image: student1,
    description: '任職：國立高雄科技大學',
    description2: '科系：智慧商務系',
    description3: '職稱：學生',
    description4: '專業：行銷管理'
  },
  // 添加更多成员
];

// 主要老师的信息
const mainTeacherInfo = {
  name: '廖奕雯 教授',
  title: '計畫主持人',
  image: teacher1,
  description: '任職：國立高雄科技大學',
  description2: '科系：智慧商務系',
  description3: '職稱：副教授',
  description4: '專業：物聯網應用、人工智慧、商管科教、科普教育、數位學習'
};
const extraTeachers = [
  {
    id: 1,
    name: '回怡雯',
    title: '共同主持人',
    image: teacher2,
    description: '任職：正修科技大學',
    description2: '科系：資訊工程系',
    description3: '職稱：專任講師',
    description4: '專業：統計分析、專案管理'
  },
  {
    id: 2,
    name: '林思妤',
    title: '共同主持人',
    image: teacher3,
    description: '任職：藝之魚創意設計有限公司',
    description2: '科系：無',
    description3: '職稱：老闆兼任講師',
    description4: '專業：平面設計、商業設計'
  },
  {
    id: 3,
    name: '利錫雨',
    title: '共同主持人',
    image: teacher4,
    description: '任職：正修科技大學',
    description2: '科系：無',
    description3: '職稱：校務行政助理',
    description4: '專業：不透露'
  }
];

export default function OcMember() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="group-photo-container">
          <img className="group-photo" src={market} alt="Group Photo" />
        </div>
        <div className="teacher-card">
          <div className="teacher-info">
            <img src={mainTeacherInfo.image} alt={mainTeacherInfo.name} />
            <h3 >{mainTeacherInfo.name}</h3>
            <h4>{mainTeacherInfo.title}</h4>
            <div className="teacher-description">
              <p >{mainTeacherInfo.description}</p>
              <p >{mainTeacherInfo.description2}</p>
              <p >{mainTeacherInfo.description3}</p>
              <p >{mainTeacherInfo.description4}</p>
            </div>
          </div>
        </div>
        <div className="members-container">
          {extraTeachers.map(teacher => (
            <div key={teacher.id} className="member-card">
              <img src={teacher.image} alt={teacher.name} />
              <h3>{teacher.name}</h3>
              <h4>{teacher.title}</h4>
              <p>{teacher.description}</p>
              <p>{teacher.description2}</p>
              <p>{teacher.description3}</p>
              <p>{teacher.description4}</p>
            </div>
          ))}
          {members.map(member => (
            <div key={member.id} className="member-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <h4>{member.title}</h4>
              <p>{member.description}</p>
              <p>{member.description2}</p>
              <p>{member.description3}</p>
              <p>{member.description4}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
