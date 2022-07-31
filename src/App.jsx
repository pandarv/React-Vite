import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

function App() {
    const headerLogo = "../public/assets/logo.svg";
    const cards = data.map((item, index) => {
        if (index == data.length - 1) {
            return <Card key={item.id} item={item} />;
        } else if (data.length) {
            return (
                <div>
                    <Card key={item.id} item={item} />
                    <hr />
                </div>
            );
        }
    });

    return (
        <div className="App">
            <Header img={headerLogo} />
            {cards}
        </div>
    );
}

export default App;
