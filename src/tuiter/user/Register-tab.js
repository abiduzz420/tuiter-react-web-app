import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";

function RegisterTab() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const handleRegister = async () => {
  try {
    if(!username || !password) {
      alert("Username and password are required");
      return;
    }
    const response = await dispatch(registerThunk({ username, password }));
    if(response.error) {
      alert("Username already exists");
    } else {
      navigate("/tuiter/profile");
    }
  } catch (e) {
    alert(e);
  }
 };

 return (
    <div>
    <h1>Register Screen</h1>
    <div className="mt-2">
        <label>Username</label>
        <input className="form-control" type="text" value={username}
        onChange={(event) => setUsername(event.target.value)}/>
    </div>
    <div className="mt-2">
        <label>Password</label>
        <input className="form-control" type="password" value={password}
        onChange={(event) => setPassword(event.target.value)}/>
    </div>
    <button className="btn btn-primary mt-2"
            onClick={handleRegister}>
        Register
    </button>
    </div>
 );
}

export default RegisterTab;
