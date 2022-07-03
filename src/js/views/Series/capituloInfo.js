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

export const CapituloInfo = () => {
	// user the context
	const { store, actions } = useContext(Context);
	const series = store.elementToDisplay;
	// react dom history
	const history = useHistory();

    const handleClickOnCard = series => {
        actions.setElementToDisplay(series);
        history.push("/serie/info");
    };

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
            <Row className="px-2">
				<Col xs={12}>
					<Button
                        className="btn btn-light"
                        onClick={_ => handleClickOnCard(series)}
                    >
                       <h4>{series?.name}</h4>
                    </Button>
				</Col>
			</Row>
			{/*capitulo info*/}
			<Row className="px-2">
            <Col xs={12} className="my-2">
					<h4 className="text-left m-0">{series?.episodio}</h4>
				</Col>
				<Col xs={12} className="my-1">
					<p className="text-left m-0">{series?.nombre}</p>
				</Col>
			</Row>
            {/*capitulo synopsis*/}
			<Row className="px-2">
				<Col xs={12} className="synopsisContainer p-3">
					<p className="text-center m-0">{series?.synopsis}</p>
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
            {/*capitulo score*/}
			<Row className="justify-content-center my-2">
				<Col xs={4} className="pe-0">
					<p className="text-end">Puntuacion</p>
				</Col>
				<Col xs={1}>
					<FontAwesomeIcon icon="fas fa-star" size="lg" />
				</Col>
				<Col xs={1}>
					<FontAwesomeIcon icon="fas fa-star" size="lg" />
				</Col>
				<Col xs={1}>
					<FontAwesomeIcon icon="fas fa-star" size="lg" />
				</Col>
				<Col xs={1}>
					<FontAwesomeIcon icon="fas fa-star" size="lg" />
				</Col>
				<Col xs={1}>
					<FontAwesomeIcon icon="fas fa-star" size="lg" />
				</Col>
				<Col xs={3}>
					<p>5 stars</p>
				</Col>
			</Row>
		</Container>
	);
};