import React from "react";
import TuitItems from "./tuit-list";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const { tuits } = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
     {
       tuits.map(tuit =>
         <TuitItems
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
 );
};
export default TuitsList;
