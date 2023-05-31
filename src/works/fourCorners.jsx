import React from 'react';
import "./fourCorners.css";
import "../img/corner-bl.svg";
import "../img/corner-ur.svg";
import "../img/corner-ul.svg";
import CornerBottomLeft from "../img/cornerBottomLeft";
import CornerBottomRight from "../img/cornerBottomRight";
import CornerUpperRight from "../img/cornerUpperRight";
import CornerUpperLeft from "../img/cornerUpperLeft";


const FourCorners = () => {
    return (
        <div id="four-corners">
            <CornerBottomLeft />
            <CornerBottomRight />
            <CornerUpperLeft />
            <CornerUpperRight />
            <h1>Three Games</h1>
        </div>
    );
};

export default FourCorners;