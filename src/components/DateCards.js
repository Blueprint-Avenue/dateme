import { SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "../styles/DateCards.css";

function DateCards() {
	const [people, setPeople] = useState([
		{
			name: "Jason Momoa",
			url: "https://m.media-amazon.com/images/M/MV5BODJlNWQ4ZjUtYjRhNi00NGQ1LWE3YTItYjRmZGI3YzI4YTEyXkEyXkFqcGdeQXVyMTA2MDIzMDE5._V1_.jpg",
		},
		{
			name: "Beyonce",
			url: "https://www.toptrendsguide.com/wp-content/uploads/2020/08/Beyonce.jpg",
		},
	]);

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
		// setLastDirection(direction);
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen!");
	};

	return (
		<div className="dateCards">
			<div className="dateCards__cardContainer">
				{people.map((person) => (
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.url})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default DateCards;
