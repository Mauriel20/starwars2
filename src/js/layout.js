import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "./store/appContext";
import { Spinner, Carousel } from "react-bootstrap";
import injectContext from "./store/appContext";

import { Menu } from "./component/menu";
import { Planets } from "./component/planets";
import { People } from "./component/people";
import { Login } from "./component/login";
import { PeopleDetails } from "./views/peopleDetails";
import { PlanetDetails } from "./views/planetDetails";
import { Home } from "./component/carousel";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		actions.loadPeople();
		actions.loadPlanet();
		setLoading(false);
	}, []);

	return (
		<BrowserRouter basename={basename}>
			<Menu />

			<Switch>
				<Route exact path="/2">
					{loading ? (
						<Spinner animation="border" role="status">
							<span className="sr-only">Loading...</span>
						</Spinner>
					) : (
						<div>
							<Home />
						</div>
					)}
				</Route>
				<Route exact path="/">
					<Login />
				</Route>
				<Route exact path="/characters">
					<People data={store.peoples} />
				</Route>
				<Route exact path="/planetsView">
					<Planets data={store.planets} />
				</Route>
				<Route exact path="/people/:id">
					<PeopleDetails data={store.peoples} />
				</Route>
				<Route exact path="/planet/:id">
					<PlanetDetails data={store.planets} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
