// App.js

import React from "react";

function Card({ receiver, writer }) {
	return (
		<div>
			<h1 style={{
				backgroundColor: "lightblue",
				width: "fit-content"
			}}>
				Suhil Kambali
			</h1>

			<h2 style={{
				backgroundColor: "lightgrey",
				width: "fit-content"
			}}>
				This is the Assigment for react creating our own component.
				
			</h2>

			<h3>Your truly, {writer}</h3>
		</div>
	);
}

export default function App() {
	return (
		<div>
			<Card writer="SSK" receiver="SSK jr" />
		</div>
	);
}
