import { Routes, Route } from "react-router";
import NavigationBar from "../nav-bar";
import NavigationSideBar from "./nav-side-bar";
import HomeTab from "./home";
import ExplorePage from "./explore-page";
import BookmarksTab from "./bookmarks";
import NotificationsTab from "./notifications-tab";
import MessagesTab from "./messages-tab";
import ProfileTab from "./profile-section";
import MoreTab from "./more-section";
import ListsTab from "./lists-page";
import FollowList from "./follow-list";

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
           <Route path="/home" element={<HomeTab/>} />
           <Route path="/explore" element={<ExplorePage />} />
           <Route path="/notifications" element={<NotificationsTab/>}/>
            <Route path="/messages" element={<MessagesTab/>}/>
            <Route path="/bookmarks" element={<BookmarksTab />}/>
            <Route path="/lists" element={<ListsTab/>}/>
            <Route path="/profile" element={<ProfileTab/>}/>
            <Route path="/more" element={<MoreTab/>}/>
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
