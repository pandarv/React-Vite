import React from "react";

const Card = (props) => {
	return (
		<article>
			<img className="location--img" src={`../public/assets/${props.item.imgSrc}`} />

			<section className="location">
				<div className="google--map">
					<img className="location--icon" src="../public/assets/location-logo.svg" />
					<h4>{props.item.name}</h4>
					<a href={props.item.mapLocation} target="_blank" rel="noopener noreferrer">
						View on Google Maps
					</a>
				</div>

				<h1>{props.item.locationName}</h1>
				<p className="bold">{props.item.tourDate}</p>
				<p>{props.item.description}</p>
			</section>
		</article>
	);
};

export default Card;
