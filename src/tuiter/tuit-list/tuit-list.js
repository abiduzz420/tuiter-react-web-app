import React from "react";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const TuitItems = (
 {
   tuit = {
     "topic": "ISRO",
     "userName": "ISRO",
     "time": "2h",
     "title": `Watch: How Chandrayaan-3's Lander Vikram Saw Moon Just Before Touchdown`,
     "image": "isro.png"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
    <div className="col-9">
      <div className="wd-tuit-list-item-title">{tuit.topic} - {tuit.time}</div>
      <span className="wd-tuit-list-item-body">{tuit.userName} <i className="fa fa-check-circle"></i></span>
      <div className="wd-tuit-list-item-body">{tuit.title}</div>
    </div>
    <div className="col-3 d-flex align-items-center justify-content-center">
        <img className="wd-explore-tuit-img" src={`${tuit.image}`} alt=""/>
    </div>
   </div>
  </li>
 );
};
export default TuitItems;
