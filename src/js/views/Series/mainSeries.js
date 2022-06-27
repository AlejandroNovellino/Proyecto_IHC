import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// react dom import
import { Redirect, Switch, useHistory } from "react-router-dom";

//include the styles
//import "../../styles/mainMenu.css";
// import context
import { Context } from "../../store/appContext";
import { Route } from "react-router";

export const MainSeries = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();

	return (
		<Container fluid className="mt-4 text-white">
				{/*tittle of watching series*/}
			<Row>
				<Col xs={12}>
					<h3 className="ms-1">Viendo</h3>
				</Col>
			</Row>
			{/*row of watching series*/}
		   </Container>
	);	   
};
