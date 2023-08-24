import React from "react";
import whoArray from './who.json';
import FollowListItems from "./follow-items";

const FollowList = () => {
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
