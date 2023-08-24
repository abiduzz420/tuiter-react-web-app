import React from "react";
import tuitsArray from './tuits.json';
import TuitItems from "./tuit-list";

const TuitsList = () => {
 return(
   <ul className="list-group">
     {
       tuitsArray.map(tuit =>
         <TuitItems
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
 );
};
export default TuitsList;