import React from "react";
import {useSelector} from "react-redux";
import FollowListItems from "./follow-items";

const FollowList = () => {
  const whoArray = useSelector((state) => state.who);
 return(
   <ul className="list-group">
     <li className="list-group-item">
       <h3>Who to follow</h3>
     </li>
     {
       whoArray.map(who =>
         <FollowListItems
           key={who._id}
           who={who}/>
       )
     }
   </ul>
 );
};
export default FollowList;
