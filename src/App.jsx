import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";

// function App() {
// 	const [monsters, setMonsters] = useState([]);
// 	const [letter, setLetter] = useState("");

// 	useEffect(() => {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((res) => res.json())
// 			.then((data) => setMonsters(data));
// 	}, []);

// 	const filteredArr = monsters.filter((item) => {
// 		return item.name.toLowerCase().includes(letter);
// 	});
// 	const onChangeHandle = (e) => {
// 		const searchStr = e.target.value.toLowerCase();
// 		setLetter(searchStr);
// 	};

// 	return (
// 		<div className="App">
// 			<input type="search" name="search" id="search--id" placeholder="Search..." onChange={onChangeHandle} />
// 			{filteredArr.map((x) => {
// 				return <h1 key={x.id}>{x.name}</h1>;
// 			})}
// 		</div>
// 	);
// }

import React, { Component } from "react";

export class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchData: "",
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => {
				this.setState(() => {
					return { monsters: data };
				});
			});
	}
	onSearchChangeHandle(element) {
		const searchData = element.target.value.toLowerCase();
		this.setState(() => {
			return { searchData };
		});
	}

	render() {
		const newArr = this.state.monsters.filter((item) => {
			return item.name.toLowerCase().includes(this.state.searchData);
		});
		return (
			<div>
				<input type="search" name="search" id="search--id" placeholder="Search..." onChange={this.onSearchChangeHandle} />
				{newArr.map((item) => (
					<h1 key={item.id}>{item.name}</h1>
				))}
			</div>
		);
	}
}

export default App;
