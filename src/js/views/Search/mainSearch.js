import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import custom components
import { CustomCarousel } from "../../component/customCarousel";
// react dom import
import { useHistory } from "react-router-dom";

//include the styles
//import "../../styles/mainMenu.css";
// import context
import { Context } from "../../store/appContext";
// import variables of the info to display
import { mainMovies } from "../../variables/mainMenuVariables.js";
import { popularSeries } from "../../variables/mainSearchVariables";

export const MainSearch = () => {
	// component variables
	const [userInput, setUserInput] = useState("");
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();

	return (
		<Container fluid className="mt-4 text-white">
			{/* search bar */}
			<Row className="mb-3">
				<Col xs={12}>
					<InputGroup className="mb-3">
						<InputGroup.Text id="inputGroup-sizing-default">
							<FontAwesomeIcon
								icon="fas fa-search"
								size="lg"
								className="me-2"
							/>
							Buscar
						</InputGroup.Text>
						<FormControl
							aria-label="Default"
							aria-describedby="inputGroup-sizing-default"
							value={userInput}
							onChange={e => {
								setUserInput(e.target.value);
							}}
						/>
					</InputGroup>
				</Col>
			</Row>
			{
				/* display when input is empty */
				!userInput && (
					<>
						{/*tittle of popular series*/}
						<Row>
							<Col xs={12}>
								<h3 className="ms-1">Series populares</h3>
							</Col>
						</Row>
						{/*row of popular series*/}
						<Row className="my-3">
							<Col xs={12}>
								<CustomCarousel infoToDisplay={mainMovies} />
							</Col>
						</Row>
						{/*tittle of popular films*/}
						<Row className="my-4">
							<Col xs={12}>
								<h3 className="ms-1">Peliculas populares</h3>
							</Col>
						</Row>
						{/*row of popular films*/}
						<Row className="my-3">
							<Col xs={12}>
								<CustomCarousel infoToDisplay={mainMovies} />
							</Col>
						</Row>
					</>
				)
			}
			{
				/* display when input is empty */
				userInput && (
					<>
						{/*row of searched element*/}
						<Row className="my-3">
							<Col xs={12}>
								<CustomCarousel infoToDisplay={mainMovies} />
							</Col>
						</Row>
					</>
				)
			}
		</Container>
	);
};
