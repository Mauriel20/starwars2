import React from "react";
import { Row, Col, Table, Media, Container, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export function PeopleDetails(props) {
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};
	return (
		<Container id="descri1">
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
											src="https://cdn.pixabay.com/photo/2017/08/06/13/17/star-wars-2592430_1280.jpg"
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
											<th>Birth Year</th>
											<th>Gender</th>
											<th>Heigth</th>
											<th>Skin Color</th>
											<th>Eye Color</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.name}</td>
											<td>{each.birth_year}</td>
											<td>{each.gender}</td>
											<td>{each.height}</td>
											<td>{each.skin_color}</td>
											<td>{each.eye_color}</td>
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

	return (
		<Container id="descri1">
			<Media className="mt-5">
				{props.data.map((each, i) => {
					if (i == 0) {
						return (
							<div key={i}>
								<Row>
									<Col>
										<img
											width={400}
											height={300}
											className="align-self-center mr-3"
											src="https://api.time.com/wp-content/uploads/2019/12/cute-star-wars-characters-10.jpg"
											alt="Generic placeholder"
										/>
									</Col>

									<Col>
										<Media.Body className="text-center">
											<h5>{each.name}</h5>
											<p>
												ffffffffffdgdgbooks, theme park attractions, and themed areas,
												comprising an all-encompassing fictional universe.
											</p>
										</Media.Body>
									</Col>
								</Row>
								<Table responsive="sm">
									<thead>
										<tr>
											<th>Name</th>
											<th>Birth Year</th>
											<th>Gender</th>
											<th>Heigth</th>
											<th>Skin Color</th>
											<th>Eye Color</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.name}</td>
											<td>{each.birth_year}</td>
											<td>{each.gender}</td>
											<td>{each.height}</td>
											<td>{each.skin_color}</td>
											<td>{each.eye_color}</td>
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

PeopleDetails.propTypes = {
	data: PropTypes.any
};
