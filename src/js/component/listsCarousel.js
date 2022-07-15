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
import { useHistory } from "react-router-dom";
// import context
import { Context } from "../store/appContext";
//include the styles
import "./../../styles/customCarousel.css";

export const ListCarousel = props => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();
	// info to display
	const infoToDisplay = props.infoToDisplay;

	const handleClickOnCard = list => {
		actions.setInList(true);
		history.push("/list-info", { list: list });
	};

	return (
		<Carousel indicators={false} controls={false} className="">
			{infoToDisplay.map((lists, i) => {
				return (
					<Carousel.Item key={i}>
						<Row xs={2} className="g-1">
							{lists.map((list, j) => {
								return (
									<Col xs={6} key={j}>
										<Card className="customCard p-0">
											<Carousel indicators={false} controls={true} className="">
												{list?.elements.map((element, k) => {
													return (
														<Carousel.Item
															key={k}
															onClick={() => handleClickOnCard(list)}>
															<Card
																className="customCard p-0"
																onClick={() => {}}>
																<Card.Img variant="top" src={element?.src} />
															</Card>
														</Carousel.Item>
													);
												})}
											</Carousel>
											<Card.Body>
												<Card.Text>{list?.name}</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								);
							})}
						</Row>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};
