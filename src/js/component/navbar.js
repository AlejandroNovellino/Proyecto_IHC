import React, { useContext } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
// react dom import
import { useHistory } from "react-router-dom";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import context
import { Context } from "../store/appContext";

//include the styles
import "../../styles/customNavbar.css";

export const Navbar = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();

	// back handler
	const handleBack = selectedView => {
		// empty the info to display movie
		actions.emptyElementToDisplay();
		// push the url selected
		switch (store.activeViewIndex) {
			case 0:
				history.push("/series");
				break;
			case 1:
				history.push("/movies");
				break;
			case 2:
				history.push("/search");
				break;
			case 3:
				history.push("/calendar");
				break;
			case 4:
				history.push("/profile");
				break;
		}
	};

	return (
		<Container fluid className="customNavbar p-4">
			{store?.elementToDisplay && (
				<Row>
					<Col xs={2}>
						<FontAwesomeIcon
							icon="fas fa-angle-left"
							size="2x"
							className="d-block mx-auto pt-1"
							onClick={() => handleBack("movies")}
						/>
					</Col>
					<Col xs={8}>
						<h2 className="m-0 text-center">{store.elementToDisplay?.name}</h2>
					</Col>
					<Col xs={2}>
						<FontAwesomeIcon
							icon="fas fa-plus-square"
							size="2x"
							className="d-block mx-auto pt-1"
						/>
					</Col>
				</Row>
			)}
			{!store?.elementToDisplay && (
				<Row>
					<Col xs={10}>
						<h2 className="m-0">{actions.getActiveView()}</h2>
					</Col>
					<Col xs={2}></Col>
				</Row>
			)}
		</Container>
	);
};
