import React, { useState, useContext } from "react";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const People = props => {
	const { store, actions } = useContext(Context);
	const [searchItem, setSearch] = useState();

	return (
		<Container>
			<h1 className="text-center mt-5 text-white">Characters</h1>

			<CardDeck>
				{props.data.map((people, i) => {
					return (
						<Col className="mt-5" md={4} key={i}>
							<Card>
								<Card.Img variant="top" src="https://s1.1zoom.me/big0/773/269320-Sepik.jpg" />
								<Card.Body>
									<Card.Title>{people.name}</Card.Title>
									<Card.Text>
										<p>
											<strong>Gender:</strong>
											<span>{people.gender}</span>
										</p>
										<p>
											<strong>Hair-Color:</strong>
											<span>{people.hair_color}</span>
										</p>
										<p>
											<strong>Eye-Color:</strong>
											<span>{people.eye_color}</span>
										</p>
									</Card.Text>
									<ButtonToolbar
										className="justify-content-between"
										aria-label="Toolbar with Button groups">
										<Link to={`/people/${i}`}>
											<Button variant="secondary">Learn More</Button>
										</Link>

										<Link onClick={() => actions.addFavorite(people.name, "people")}>
											<Button variant="outline-danger">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24">
													<path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" />
												</svg>
											</Button>
										</Link>
									</ButtonToolbar>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</CardDeck>
		</Container>
	);
};

People.propTypes = {
	data: PropTypes.any
};
