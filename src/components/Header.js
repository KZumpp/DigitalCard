import React from "react";
import MyImage from '../assets/head-shot.jpg';




export default function Header() {
    return (
        <>
        <div className="picture">
        <img src={MyImage} alt="main"/>
        </div>
        <div className="caption">
        <h1>Katie Zumpano</h1>
        <h2>Full Stack Developer</h2>
        <h3>kzump.com</h3>
        </div>
       
        </>
        
    )
}