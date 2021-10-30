import React from 'react'
import "./ItemText.css";
import Fade from 'react-reveal/Fade';
function ItemText({ title, description }) {
    return (
        <Fade bottom>
            <div className="itemText">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </Fade>
    )
}

export default ItemText
