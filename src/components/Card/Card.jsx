import React from "react";
import "./Card.css";

const Card = ({ url, title, description }) => {
    return (
        <div className="container">

            <div>
                <img src={url} className="img" />
            </div>
            <div>
                <h2 className="title">{title} </h2>
                <p className="description">{description} </p>
            </div>
        </div>
    )
}

export default Card
