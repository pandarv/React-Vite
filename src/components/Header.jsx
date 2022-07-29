import React from "react";

const Header = (props) => {
	return (
		<header>
			<img src={props.img} alt="A globe" className="logo--img" />
			<h2>my travel journal.</h2>
		</header>
	);
};

export default Header;
