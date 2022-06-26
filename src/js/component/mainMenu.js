import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// react dom import
import { useHistory } from "react-router-dom";

//include the styles
import "../../styles/mainMenu.css";
// import context
import { Context } from "../store/appContext";

export const MainMenu = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();
	// const for style
	const notSelectedStyle = "text-center py-2";
	const selectedStyle = notSelectedStyle.concat(" ", "selectedView");

	// click handler on the menu options
	const viewHandler = selectedView => {
		// set the active view index
		actions.setActiveViewIndex(selectedView);
		// push the url selected
		switch (selectedView) {
			case 1:
				history.push("/series");
				break;
			case 2:
				history.push("/movies");
				break;
			case 3:
				history.push("/search");
				break;
			case 4:
				history.push("/calendar");
				break;
			case 5:
				history.push("/profile");
				break;
		}
	};

	return (
		<Container fluid className="mainMenu fixed-bottom py-3">
			<Row className="justify-content-around text-white px-1">
				<Col
					className={
						store?.activeViewIndex == 1 ? selectedStyle : notSelectedStyle
					}
					onClick={() => viewHandler(1)}>
					<FontAwesomeIcon icon="fas fa-tv-alt" size="lg" />
				</Col>
				<Col
					className={
						store?.activeViewIndex == 2 ? selectedStyle : notSelectedStyle
					}
					onClick={() => viewHandler(2)}>
					<FontAwesomeIcon icon="fas fa-film" size="lg" />
				</Col>
				<Col
					className={
						store?.activeViewIndex == 3 ? selectedStyle : notSelectedStyle
					}
					onClick={() => viewHandler(3)}>
					<FontAwesomeIcon icon="fas fa-search" size="lg" />
				</Col>
				<Col
					className={
						store?.activeViewIndex == 4 ? selectedStyle : notSelectedStyle
					}
					onClick={() => viewHandler(4)}>
					<FontAwesomeIcon icon="fas fa-calendar" size="lg" />
				</Col>
				<Col
					className={
						store?.activeViewIndex == 5 ? selectedStyle : notSelectedStyle
					}
					onClick={() => viewHandler(5)}>
					<FontAwesomeIcon icon="fas fa-user" size="lg" />
				</Col>
			</Row>
		</Container>
	);
};
