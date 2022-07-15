import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { MainMenu } from "./component/mainMenu";
import { MainMovie } from "./views/Movies/mainMovie";
import { MovieInfo } from "./views/Movies/movieInfo";
import { MainSeries } from "./views/Series/mainSeries";
import { MainSearch } from "./views/Search/mainSearch";
import { MainCalendar } from "./views/Calendar/mainCalendar";
import { MainProfile } from "./views/Profile/mainProfile";
import { MainListInfo } from "./views/Lists/mainListInfo";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { CapituloInfo } from "./views/Series/capituloInfo";
import { SerieInfo } from "./views/Series/serieInfo";

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
						<Route exact path="/series">
							<MainSeries />
						</Route>
						<Route exact path="/serie/info">
							<SerieInfo />
						</Route>
						<Route exact path="/capitulo/info">
							<CapituloInfo />
						</Route>
						{/* movies routes */}
						<Route exact path="/movies">
							<MainMovie />
						</Route>
						<Route exact path="/movie/info">
							<MovieInfo />
						</Route>
						{/* search routes */}
						<Route exact path="/search">
							<MainSearch />
						</Route>
						{/* calendar routes */}
						<Route exact path="/calendar">
							<MainCalendar />
						</Route>
						{/* user profile routes */}
						<Route exact path="/profile">
							<MainProfile />
						</Route>
						{/* lists routes */}
						<Route exact path="/list-info">
							<MainListInfo />
						</Route>
						{/* redirect to the main view */}
						<Redirect from="/" to="/movie" />
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
