import React, { useContext } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
// react dom import
import { useHistory, useLocation } from "react-router-dom";
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
	// react dom location
	const location = useLocation();

	// back handler
	const handleBack = _ => {
		// empty the info to display movie
		if (history.location?.pathname != "/serie/info") {
			actions.emptyElementToDisplay();
		}
		// back in the history
		history.goBack();
	};

	//handle back from the list
	const handleBackFromList = _ => {
		actions.setInList(false);
		history.goBack();
	};

	return (
		<Container fluid className="customNavbar p-4">
			{store?.inList && !store?.elementToDisplay && (
				<Row>
					<Col xs={2}>
						<FontAwesomeIcon
							icon="fas fa-angle-left"
							size="2x"
							className="d-block mx-auto pt-1"
							onClick={handleBackFromList}
						/>
					</Col>
					<Col xs={10}>
						<h2 className="m-0 text-center">
							{"Lista: " + location.state?.list?.name}
						</h2>
					</Col>
				</Row>
			)}
			{store?.elementToDisplay && (
				<Row>
					<Col xs={2}>
						<FontAwesomeIcon
							icon="fas fa-angle-left"
							size="2x"
							className="d-block mx-auto pt-1"
							onClick={handleBack}
						/>
					</Col>
					<Col xs={8}>
						<h2 className="m-0 text-center">
							{store.activeViewIndex !== 0
								? store.elementToDisplay?.name
								: null}
						</h2>
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
			{!store?.elementToDisplay && !store?.inList && (
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
