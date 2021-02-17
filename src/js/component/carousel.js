import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<Container>
			<Carousel>
				<Carousel.Item>
					<Link to="/characters">
						<img
							className="d-block w-100"
							src="https://s1.1zoom.me/big0/958/Clone_trooper_Star_Wars_Movies_Helmet_518354_1280x720.jpg"
							alt="Characters"
						/>
					</Link>
					<Carousel.Caption>
						<h3>Characters</h3>
						<p>Find Your Favorites Star Wars Characters</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/planetsView">
						<img
							className="d-block w-100"
							src="https://s1.1zoom.me/big0/108/Star_Wars_Movies_Tusken_Fan_ART_521908_1280x707.jpg"
							alt="planets"
						/>
					</Link>
					<Carousel.Caption>
						<h3>Planets</h3>
						<p>Have a Look at The Names of The Planets</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
