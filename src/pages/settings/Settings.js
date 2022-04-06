import React from 'react';
import Inputs from "../../components/navigation/Inputs";
import "./settings.css";
import {AddAPhoto} from "@mui/icons-material";


function Settings(props) {
    return (
        <div className="settingsContent">

            <Inputs
                label={<AddAPhoto
                    className={"settingsPhoto"}
                    style={{ fontSize: 150 , margin: "20px",color: "cadetblue"}}
                />}
                className="image"
                inputClass="imageInput"
                name="img"
                type="file"
                accept="image/*"
            />
            <Inputs
                className="settings"
                inputClass="inputClass"
                placeholder="First Name"
                type="text"
                name="first_name"
            />
            <Inputs
                className="settings"
                inputClass="inputClass"
                placeholder="Last Name"
                type="text"
                name="last_name"
            />
            <Inputs
                className="settings"
                inputClass="inputClass"
                placeholder="Email"
                type="email"
                name="email"
            />
            <Inputs
                className="settings"
                inputClass="inputClass"
                placeholder="Phone"
                type="text"
                name="phone"
            />
            <Inputs
                className="settings"
                inputClass="inputClass"
                placeholder="Password"
                type="password"
                name="password"
            />
            <Inputs
                className="settings"
                inputClass="inputClass"
                placeholder="Password"
                type="password"
                name="password"
            />
            <button className="btn" type="submit">Save</button>
        </div>
    );
}

export default Settings;