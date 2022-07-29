import React from "react";

function Main({ person }) {
	return (
		<main>
			<section className="card">
				<img src={person.image} alt="" />
				<div>
					<h3>{person.name}</h3>
					<p>{person.age}</p>
				</div>
			</section>
		</main>
	);
}

export default Main;
