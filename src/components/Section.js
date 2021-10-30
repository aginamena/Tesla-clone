import React from 'react'
import "./Section.css";
import ItemText from './ItemText';
import Fade from 'react-reveal/Fade';
function Section({ id, title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <div className="section" style={{ backgroundImage: "url(./images/" + backgroundImg + ")" }} id={id}>
            <ItemText title={title} description={description} />
            <div id="btnG">
                <Fade left>
                    <div className="buttonGroup">
                        {leftBtnText.length > 0 ?
                            <>
                                <button type="button" id="leftBtn">{leftBtnText}</button>
                                <button type="button" id="rightBtn">{rightBtnText}</button>
                            </>
                            :
                            <button
                                type="button"
                                id="rightBtn"
                                style={rightBtnText == "Shop Now" ? { background: "black", color: "white" } :
                                    { background: "white", color: "black" }}
                            >{rightBtnText}</button>
                        }
                    </div>
                </Fade>
            </div>
            <img src="./images/down-arrow.svg" />
        </div>
    )
}

export default Section


