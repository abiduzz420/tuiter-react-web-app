import { Routes, Route } from "react-router";
import NavigationBar from "../nav-bar";
import NavigationSideBar from "./nav-side-bar";
import HomeTab from "./home";
import ExplorePage from "./explore-page";
import BookmarksTab from "./bookmarks";
import NotificationsTab from "./notifications-tab";
import MessagesTab from "./messages-tab";
import MoreTab from "./more-section";
import ListsTab from "./lists-page";
import LoginTab from "./user/Login-tab";
import RegisterTab from "./user/Register-tab";
import authReducer from "./reducers/auth-reducer";
import ProfileTab from "./user/Profile-tab";
import FollowList from "./follow-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import tuitDetailsReducer from "./reducers/tuit-details-reducer";
import "./index.css"


const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, tuitDetails: tuitDetailsReducer, user: authReducer}});

function Tuiter() {
 return (
   <Provider store={store}>
   <div>
     <NavigationBar />
     <div className="row">
       <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-1 col-sm-1">
         <NavigationSideBar />
       </div>
       <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-11 col-sm-11">
         <Routes>
           <Route path="/home" element={<HomeTab/>} />
           <Route path="/explore" element={<ExplorePage />} />
           <Route path="/notifications" element={<NotificationsTab/>}/>
            <Route path="/messages" element={<MessagesTab/>}/>
            <Route path="/bookmarks" element={<BookmarksTab />}/>
            <Route path="/lists" element={<ListsTab/>}/>
            <Route path="/profile" element={<ProfileTab/>}/>
            <Route path="/more" element={<MoreTab/>}/>
            <Route path="/login"    element={<LoginTab    />} />
            <Route path="/register" element={<RegisterTab />} />
         </Routes>
       </div>
       <div className="col-xxl-3 col-xl-3 col-lg-3 d-none d-lg-block">
          <FollowList/>
       </div>
     </div>
   </div>
   </Provider>
 );
}
export default Tuiter;
