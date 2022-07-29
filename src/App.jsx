import React, { useState } from "react";
import Main from "./components/Main";
import data from "./data";
import "./App.css";

function App() {
	const [birthdayList, setBirthdayList] = useState(data);
	const list = birthdayList.map((person) => <Main key={person.id} person={person} />);
	const clickHandler = () => {
		setBirthdayList([]);
	};
	return (
		<div className="container">
			<h1>
				<span>{birthdayList.length}</span> {birthdayList.length == 1 || birthdayList == 0 ? "Birthday" : "Birthdays"} today
			</h1>
			{/* <Main peopleList={birthdayList} /> */}
			{list}
			<button onClick={clickHandler}>Clear List</button>
		</div>
	);
}

export default App;
