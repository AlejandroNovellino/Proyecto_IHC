import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { MainMenu } from "./component/mainMenu";
import { Home } from "./views/home";
import { MainMovie } from "./views/Movies/mainMovie";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						{/* series routes */}
						{/* movies routes */}
						<Route exact path="/movies">
							<MainMovie />
						</Route>
						{/* calendar routes */}
						{/* user profile routes */}
						{/* redirect to the main view */}
						<Redirect from="/" to="/movies" />
					</Switch>
					<br />
					<br />
					<br />
					<MainMenu />
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
