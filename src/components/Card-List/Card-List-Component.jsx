import React from "react";
import "./Card-List-Component.scss";

const CardListComponent = ({ monster }) => {
	return (
		<div className="profile-container">
			<div className="image-container">I mage will go here</div>
			<h1>{monster.name}</h1>
		</div>
	);
};

export default CardListComponent;
