import { Routes, Route } from "react-router";
import Nav from "../nav-bar";
import NavigationSideBar from "./nav-side-bar";
import HomeScreen from "./home";
import ExplorePage from "./explore-page";
import BookmarksTab from "./bookmarks";
import NotificationsScreen from "./notifications-tab";
import MessagesScreen from "./messages-tab";
import ProfileScreen from "./profile-section";
import MoreScreen from "./more-section";
import ListsScreen from "./lists-page";
import FollowList from "./follow-list";
import NavigationBar from "../nav-bar";

function Tuiter() {
 return (
   <div>
     <NavigationBar />
     <div className="row">
       <div className="col-2">
         <NavigationSideBar />
       </div>
       <div className="col-7">
         <Routes>
           <Route path="/home" element={<HomeScreen/>} />
           <Route path="/explore" element={<ExplorePage />} />
           <Route path="/notifications" element={<NotificationsScreen/>}/>
            <Route path="/messages" element={<MessagesScreen/>}/>
            <Route path="/bookmarks" element={<BookmarksTab />}/>
            <Route path="/lists" element={<ListsScreen/>}/>
            <Route path="/profile" element={<ProfileScreen/>}/>
            <Route path="/more" element={<MoreScreen/>}/>
         </Routes>
       </div>
       <div className="col-3">
          <FollowList/>
       </div>
     </div>
   </div>
 );
}
export default Tuiter;