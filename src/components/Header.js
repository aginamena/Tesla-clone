import React from 'react'
import "./Header.css";
function Header() {
    function showBurderNav() {
        document.querySelector("#burgerNav").style = "display:block";
        document.querySelector("#home").style = "filter:brightness(0.5)";
    }
    return (
        <div id="header" className="container">
            <img src="./images/logo.svg" />
            <div id="header-items">

                <a href="#modelS" style={{ width: "92px" }}>Model S</a>
                <a href="#model3" style={{ width: "92px" }}>Model 3</a>
                <a href="#modelX" style={{ width: "92px" }}>Model X</a>
                <a href="#modelY" style={{ width: "92px" }}>Model Y</a>
                <a href="#solarRoof" style={{ width: "109px" }}>Solar Roof</a>
                <a href="#solarPanels" style={{ width: "123px" }}>Solar Panels</a>
            </div>
            <div id="header-items2">
                <a href="" >Shop</a>
                <a href="" >Account</a>
                <a href="">Menu</a>
            </div>
            <i className="fas fa-bars" onClick={showBurderNav}></i>
        </div>
    )
}

export default Header
