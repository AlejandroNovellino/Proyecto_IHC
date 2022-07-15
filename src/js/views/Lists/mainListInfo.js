import React, { useState, useEffect, useContext } from "react";
import {
	Container,
	Row,
	Col,
	Carousel,
	Card,
	CardGroup,
} from "react-bootstrap";
// react dom import
import { useHistory, useLocation } from "react-router-dom";
// import context
import { Context } from "../../store/appContext";

export const MainListInfo = props => {
	// user the context
	const { store, actions } = useContext(Context);
	// info send by history hook
	const location = useLocation();
	const list = location.state.list;
	// react dom history
	const history = useHistory();

	const handleClickOnCard = element => {
		actions.setElementToDisplay(element);
		if (list.type == "MOVIES") {
			history.push("/movie/info");
		} else if (list.type == "SERIES") {
			history.push("/serie/info");
		}
	};

	return (
		<Container fluid className="mt-4 text-white">
			{/*tittle of save films*/}
			<Row>
				<Col xs={12}>
					<h3 className="ms-1">Elementos en la lista</h3>
				</Col>
			</Row>
			{/*row of saved films*/}
			<Row className="my-3">
				{list?.elements.map((element, index) => {
					return (
						<Col xs={6} key={index}>
							<Card
								className="customCard p-0 mb-2"
								onClick={_ => handleClickOnCard(element)}>
								<Card.Img variant="top" src={element?.src} />
								<Card.Body>
									<Card.Text>{element?.name}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
