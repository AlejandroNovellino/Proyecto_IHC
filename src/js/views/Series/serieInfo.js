import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
// react dom import
import { useHistory } from "react-router-dom";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import context
import { Context } from "../../store/appContext";

//include the styles
import "../../../styles/utilities.css";

export const SerieInfo = () => {
	// user the context
	const { store, actions } = useContext(Context);
	const series = store.elementToDisplay;
	// react dom history
	const history = useHistory();

	return (
		<Container fluid className="mt-4 text-white">
			{/*serie image*/}
			<Row className="mb-4">
				<Col xs={12}>
					<Image
						src={series?.image}
						fluid
						className="customImage d-block m-auto"
					/>
				</Col>
			</Row>
            {/*boton episodios*/}
            <Row className="mb-4">
				<Col xs={12}>
					<Button
                        className="btn btn-light"
                    >
                       <h5>Episodios</h5>
                    </Button>
				</Col>
			</Row>
            {/*capitulo synopsis*/}
			<Row className="px-2">
				<Col xs={12} className="synopsisContainer p-3">
					<p className="text-center m-0">{series?.about}</p>
				</Col>
			</Row>
			{/*where to see the serie*/}
			<Row className="justify-content-center mt-3 mb-3">
				<Col xs={12} className="text-center">
					<h4>Donde verla?</h4>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col xs={3}>
					<p>o1</p>
				</Col>
				<Col xs={3}>
					<p>o2</p>
				</Col>
				<Col xs={3}>
					<p>o2</p>
				</Col>
			</Row>
            {/*Cast*/}
			<Row className="justify-content-center mt-3 mb-3">
				<Col xs={12} className="text-center">
					<h4>Reparto</h4>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col xs={3}>
					<p>c1</p>
				</Col>
				<Col xs={3}>
					<p>c2</p>
				</Col>
				<Col xs={3}>
					<p>c2</p>
				</Col>
			</Row>
		</Container>
	);
};