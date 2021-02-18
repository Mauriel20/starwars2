import React from "react";
import { Row, Col, Table, Media, Container, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export function PlanetDetails(props) {
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};
	return (
		<Container id="descri2">
			<Media className="mt-5">
				{props.data.map((each, i) => {
					if (i == intId) {
						return (
							<div key={i}>
								<Row>
									<Col>
										<img
											width={400}
											height={300}
											className="align-self-center mr-3"
											src="https://cdn.pixabay.com/photo/2019/05/05/11/21/star-wars-4180267_1280.jpg"
											alt="Generic placeholder"
										/>
									</Col>
									<Col>
										<Media.Body className="text-center">
											<h5>{each.name}</h5>
											<p>
												The Star Wars saga, also referred to as the Skywalker saga, is the main
												line of Star Wars films that began in 1977 with Star Wars: Episode IV A
												New Hope. While a larger universe of stories and characters has evolved
												around it, the saga films tell the story of the Skywalker family through
												a set of three trilogies. The original trilogy ran from 1977 to 1983,
												which was followed by the prequel trilogy from 1999 to 2005, and the
												sequel trilogy from 2015 to 2019.
											</p>
										</Media.Body>
									</Col>
								</Row>
								<Table responsive="sm">
									<thead>
										<tr>
											<th>Name</th>
											<th>Climate</th>
											<th>Population</th>
											<th>Orbital Period</th>
											<th>Rotation Period</th>
											<th>Diameter</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.name}</td>
											<td>{each.climate}</td>
											<td>{each.population}</td>
											<td>{each.orbital_period}</td>
											<td>{each.rotation_period}</td>
											<td>{each.diameter}</td>
										</tr>
									</tbody>
								</Table>
								<Button variant="dark" onClick={() => goBack()}>
									Go Back
								</Button>
							</div>
						);
					}
				})}
			</Media>
		</Container>
	);
}

PlanetDetails.propTypes = {
	data: PropTypes.any
};
