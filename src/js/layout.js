import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
						{/* movies routes */}
						<Route exact path="/">
							<MainMovie />
						</Route>
						{/* series routes */}
						{/* billboard routes */}
						{/* user profile routes */}
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<MainMenu />
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
