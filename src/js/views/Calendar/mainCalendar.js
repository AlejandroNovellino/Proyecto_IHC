import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// react dom import
import { useHistory } from "react-router-dom";

//include the styles
//import "../../styles/mainMenu.css";
// import context
import { Context } from "../../store/appContext";

export const MainCalendar = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();

	return <Container fluid className=""></Container>;
};
