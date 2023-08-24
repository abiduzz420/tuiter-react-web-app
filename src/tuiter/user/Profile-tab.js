import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
	profileThunk,
	logoutThunk,
	updateUserThunk,
} from "../services/auth-thunks";

function ProfileTab() {
	const { currentUser } = useSelector((state) => state.user);
	const [profile, setProfile] = useState(currentUser);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const save = async () => {
		try{
			console.log("save button");
			await dispatch(updateUserThunk(profile));
			alert("Profile saved");
		} catch (error) {
        	console.log("Error saving profile: ", error);
    	}
	};

	const loadProfile = async () => {
		try {
			const { payload } = await dispatch(profileThunk());
			setProfile(payload);
		} catch (error) {
			console.log("loadProfile Error: ", error);
		}
	};

	useEffect(() => {
		loadProfile();
	}, []);

	return (
		<div>
			<h1>Profile Screen</h1>
			{profile && (
				<div>
					<div>
						<label className="me-2">First Name</label>
						<input
							type="text"
							value={profile.firstName}
							onChange={(event) => {
								const newProfile = {
									...profile,
									firstName: event.target.value,
								};
								setProfile(newProfile);
							}}
						/>
					</div>
					<br></br>
					<div>
						<label className="me-2">Last Name</label>
						<input
							type="text"
							value={profile.lastName}
							onChange={(event) => {
								const newProfile = {
									...profile,
									lastName: event.target.value,
								};
								setProfile(newProfile);
							}}
						/>
					</div>
				</div>
			)}
			<br></br>
			<button
				className="me-3"
				onClick={() => {
					dispatch(logoutThunk());
					navigate("/tuiter/login");
				}}>
				Logout
			</button>
			<button onClick={save}>Save</button>
		</div>
	);
}
export default ProfileTab;
