import React from "react";


export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.item.imageUrl} alt={props.item.title} ></img>
            <div className="card--info">
                <div className="firstline">
                    <span href="" class="fa fa-map-marker"></span>
                    <small className="country">{props.item.location}</small>
                    <a href={props.item.googleMapsUrl} className="map--link">View on Google Maps</a>
                </div>
                <h3 className="secondline">{props.item.title}</h3><br></br>
                <p className="thirdline">{props.item.startDate} - {props.item.endDate}</p>
                <p className="fourthline">{props.item.description}</p>
            </div>
        </div>
    )
}