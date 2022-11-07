import { useState, useEffect } from "react";
import "./App.scss";
// import CardListComponent from "./components/Card-List/Card-List-Component";

function App() {
	const [monsters, setMonsters] = useState([]);
	const [letter, setLetter] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setMonsters(data));
	}, []);

	const filteredArr = monsters.filter((item) => {
		return item.name.toLowerCase().includes(letter);
	});
	const onChangeHandle = (e) => {
		const searchStr = e.target.value.toLowerCase();
		setLetter(searchStr);
	};

	return (
		<div className="App">
			<input type="search" name="search" id="search--id" placeholder="Search..." onChange={onChangeHandle} />
			<h1>Employee Profile</h1>
			{filteredArr.map((monster) => {
				return (
					<div className="profile-container">
						<div className="image-container">I mage will go here</div>
						<h2>{monster.name}</h2>
					</div>
				);
			})}
		</div>
	);
}

// import React, { Component } from "react";

// export class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			monsters: [],
// 			searchData: "",
// 		};
// 	}
// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((res) => res.json())
// 			.then((data) => {
// 				this.setState(() => {
// 					return { monsters: data };
// 				});
// 			});
// 	}
// 	onSearchChangeHandle(element) {
// 		const searchData = element.target.value.toLowerCase();
// 		this.setState(() => {
// 			return { searchData };
// 		});
// 	}

// 	render() {
// 		const newArr = this.state.monsters.filter((item) => {
// 			return item.name.toLowerCase().includes(this.state.searchData);
// 		});
// 		return (
// 			<div>
// 				<input type="search" name="search" id="search--id" placeholder="Search..." onChange={this.onSearchChangeHandle} />
// 				{newArr.map((item) => (
// 					<h1 key={item.id}>{item.name}</h1>
// 				))}
// 			</div>
// 		);
// 	}
// }

export default App;
