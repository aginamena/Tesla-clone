import React from 'react'
import "./BurgerNav.css";
function BurgerNav() {

    // var winX = null;
    // var winY = null;

    // window.addEventListener('scroll', function () {
    //     if (winX !== null && winY !== null) {
    //         window.scrollTo(winX, winY);
    //     }
    // });

    // function disableWindowScroll() {
    //     winX = window.scrollX;
    //     winY = window.scrollY;
    // }

    // function enableWindowScroll() {
    //     winX = null;
    //     winY = null;
    // }

    function closeBurgerNav() {
        document.querySelector("#burgerNav").style = "display:none";
        document.querySelector("#home").style = "filter:brightness(1)";
    }
    return (
        <div id="burgerNav">
            <i className="fas fa-times" onClick={closeBurgerNav}></i>
            <div>
                <li>Existing Inventory</li>
                <li>Used Inventory</li>
                <li>Trade-In</li>
                <li>Cybertruck</li>
                <li>Roadster</li>
                <li>Semi</li>
                <li>Charging</li>
                <li>Powerwall</li>
                <li>Commercial Energy</li>
                <li>Utilities</li>
                <li>Find Us</li>
                <li>Support</li>
                <li>Investor Relations</li>
            </div>
        </div>
    )
}

export default BurgerNav
