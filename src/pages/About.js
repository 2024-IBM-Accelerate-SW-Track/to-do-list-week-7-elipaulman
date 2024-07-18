import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Elijah (Eli) Paulman</div>
            <div className="brief_description">
              I am a Computer Science and Engineering student at the Ohio State
              University and an API Software Developer intern at London Computer
              Systems for the summer of 2024. I am very passionate about tech
              accessibility and sustainability efforts.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
