import React, { useContext } from "react";
import { Dropdown, Container, DropdownButton, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";

export const Menu = () => {
	const { store, actions } = useContext(Context);
	return (
		<Container>
			<Iframe
				id="music"
				width="100%"
				height="300"
				scrolling="no"
				frameborder="no"
				allow="autoplay"
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/40347410&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
			/>
			<Navbar bg="light">
				<Link to="/">
					<Navbar.Brand href="#home">
						<img
							src="https://www.vippng.com/png/detail/1-13632_star-wars-logo-png-star-wars-logo-black.png"
							width="70"
							height="45"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
				</Link>

				<Navbar.Collapse className="justify-content-end">
					<DropdownButton
						id="dropdown-basic-button"
						variant="dark"
						title={"Favorites " + store.favorites.length}>
						{store.favorites.length == 0 ? (
							<Dropdown.Item>Empty</Dropdown.Item>
						) : (
							store.favorites.map((favorite, i) => {
								return (
									<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavorite(i)}>
										{favorite.type == "people" ? (
											<div>
												<i className="fas fa-id-card">
													&nbsp;
													{favorite.name}
												</i>
												&nbsp;&nbsp;&nbsp;
												<i className="far fa-trash-alt" />
											</div>
										) : (
											<div>
												<i className="fas fa-globe-americas">
													&nbsp;
													{favorite.name}
												</i>
												&nbsp;&nbsp;&nbsp;
												<i className="far fa-trash-alt" />
											</div>
										)}
									</Dropdown.Item>
								);
							})
						)}
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};
