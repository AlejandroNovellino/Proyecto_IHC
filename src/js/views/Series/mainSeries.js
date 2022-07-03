import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Navbar, Card } from "react-bootstrap";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// react dom import
import { Redirect, Switch, useHistory } from "react-router-dom";

//include the styles
//import "../../styles/mainMenu.css";
// import context
import { Context } from "../../store/appContext";
import { Route } from "react-router";
import img1 from "../../../img/wandaBanner.jpg";
import img2 from "../../../img/darkBanner.jpg";
import img3 from "../../../img/kenobiBanner.jpg";
import img4 from "../../../img/deathnoteBanner.jpg";
import img5 from "../../../img/euphoriaBanner.jpg";
import img6 from "../../../img/strangerBanner.jpg";
import img7 from "../../../img/mandalorianBanner.jpg";
import img8 from "../../../img/squidgameBanner.jpg";
import img9 from "../../../img/witcherBanner.jpg";
import img10 from "../../../img/arcaneBanner.jpg";

export const MainSeries = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();
	const cardInfoViendo = [
		{
			id: 0,
			image: img1,
			name: "WandaVision",
			episodio: "T01 - E07",
			nombre: "Abajo la cuarta pared",
			porver: "Quedan por ver: +2",
			synopsis:
				"Monica planea volver a la anomalía. Wanda sortea obstáculos. Visión forja otra alianza para ayudar",
			about:
				"WandaVision combina el estilo cómico de situaciones clásicas con el Universo Cinematográfico de Marvel en el que Wanda Maximoff y Visión, dos seres superpoderosos que viven su vida suburbana ideal, comienzan a sospechar que no todo es lo que parece.",
		},
		{
			id: 1,
			image: img6,
			name: "Stranger Things",
			episodio: "T04 - E01",
			nombre: "El club Hellfire",
			porver: "Quedan por ver: +6",
			synopsis:
				"Eleven sufre acoso escolar, pero no puede defenderse. Joyce abre un paquete misterioso. En Hawkins, alguien agita la noche de Calabozos y Dragones.",
			about:
				"Después de la extraña desaparición de un niño, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una niña muy especial.",
		},
		{
			id: 2,
			image: img2,
			name: "Dark",
			episodio: "T01 - E03",
			nombre: "Pasado y presente",
			porver: "Quedan por ver: +7",
			synopsis:
				"1986. Mads, el hermano de Ulrich, lleva un mes desaparecido. La conclusión se vuelve manifiesta a medida que el pasado y el presente se entremezclan.",
			about:
				"En Winden (2019), un pequeño pueblo ficticio situado en Alemania, la desaparición de un niño pone en alerta a todos los vecinos. El cuerpo de policía trata de investigar el caso sin hallar ninguna explicación. En el municipio viven cuatro familias: los Kahnwald, los Nielsen, los Doppler y los Tiedemann. Todas permanecen unidas ante los misteriosos acontecimientos. Sin embargo, todo cambia el día que Mikkel, el hijo menor de la familia Nielsen, desaparece sin dejar rastro.",
		},
		{
			id: 3,
			image: img10,
			name: "Arcane",
			episodio: "T01 - E08",
			nombre: "Aceite y agua",
			porver: "Quedan por ver: +1",
			synopsis:
				"La heredera desterrada Mel y su madre, de visita, intercambian tácticas de combate. Caitlyn y Vi forjan una inesperada alianza. Jinx se somete a un cambio impactante.",
			about:
				"Mientras la discordia separa las ciudades gemelas de Piltóver y Zaun, dos hermanas se enfrentan en una guerra feroz entre tecnologías mágicas y convicciones opuestas.",
		},
		{
			id: 4,
			image: img9,
			name: "The Witcher",
			episodio: "T02 - E05",
			nombre: "Decisiones",
			porver: "Quedan por ver: +3",
			synopsis:
				"Como un poderoso mago se une a la caza de Ciri, ella hace un trato con Vesemir sobre su extraordinario descubrimiento. Geralt explora el misterio de los monolitos.",
			about:
				"Geralt de Rivia es un brujo, mutado durante su infancia para ser más efectivo en su labor, matar monstruos por dinero. El continente se encuentra en un estado de caos debido a las ansias del Imperio de Nilfgaard por ampliar su territorio. Entre los refugiados de esta lucha se encuentra la princesa Cirilla de Cintra, conocida como Ciri, que es constantemente perseguida por Nilfgaard debido al secreto poder que posee. Debido al destino, Geralt y Ciri están unidos para siempre desde antes del nacimiento de esta. Durante sus viajes Geralt conoce a Jaskier, un trovador demasiado hablador, y a Yennefer de Vengerberg, una poderosa hechicera.",
		},
	];

	const handleClickOnCard = series => {
		actions.setElementToDisplay(series);
		history.push("/capitulo/info");
	};

	const cardInfoSin = [
		{
			id: 5,
			image: img3,
			name: "Obi-Wan Kenobi",
			episodio: "Episodio 1",
			nombre: "Parte 1",
			synopsis:
				"Cuando los agentes del Imperio plantean una nueva amenaza, Obi-wan Kenobi emerge tras años de ocultamiento.",
			about:
				"Se centra en Obi-Wan Kenobi 10 años después del final de las Guerras Clon, donde enfrentó su mayor derrota: la caída y corrupción de su mejor amigo y aprendiz de Jedi, Anakin Skywalker quién se convirtió en el malvado Lord Sith Darth Vader.",
		},
		{
			id: 6,
			image: img4,
			name: "Death Note",
			episodio: "Episodio 1",
			nombre: "Renacimiento",
			synopsis:
				"Fuera de los terrenos de su instituto, Light Yagami descubre una libreta que afirma poder matar a cualquiera cuyo nombre y rostro sean conocidos por su propietario. Al principio descarta la llamada Death Note como un engaño, pero, tras probar sus poderes, descubre que efectivamente son reales. El propietario original, un shinigami llamado Ryuk, se acerca a Light y le explica que la libreta ahora le pertenece. Como Light es el nuevo propietario, es el único que puede ver y oír a Ryuk. El shinigami también dice que cuando llegue la hora de la muerte de Light, Ryuk escribirá el nombre de Light en su Death Note personal. Light decide usar el poder de la Death Note para librar al mundo del mal y convertirse en el dios de un mundo nuevo y pacífico.",
			about:
				"Light Yagami es un joven estudiante que un día encuentra un cuaderno llamado Death Note que tiene una macabra propiedad: si el nombre de una persona aparece escrito en él, morirá. Light decide, entonces, embarcarse en una misión para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective, intenta descifrar el misterio que rodea a todas estas muertes.",
		},
		{
			id: 7,
			image: img5,
			name: "Euphoria",
			episodio: "Episodio 1",
			nombre: "Piloto",
			synopsis:
				"Rue, regresa a casa de la rehabilitación sin planes de mantenerse limpia. Ahí conoce a Jules, que es nueva en la ciudad, en una fiesta en la casa de McKay. Nate se mete en la cabeza de McKay cuando el se interesa en Cassie. Mientras tanto, Kat es presionada para perder algo.",
			about:
				"El drama estadounidense sigue a un grupo de adolescentes en sus conflictos internos relacionados con el sexo, el uso de drogas y la violencia. Ellos tratarán de lidiar con sus propios demonios, a fin de superar los obstáculos que se interponen en sus metas o, simplemente, en su día a día.",
		},
		{
			id: 8,
			image: img7,
			name: "The Mandalorian",
			episodio: "Episodio 1",
			nombre: "El mandaloriano",
			synopsis:
				"Un cazarrecompensas mandaloriano rastrea un objetivo para un cliente buen pagador.",
			about:
				"Ambientada en el universo de Star Wars que se desarrolla tras la caída del Imperio y antes de la aparición de la Primera Orden, la serie sigue los pasos de Mando, un cazarecompensas perteneciente a la legendaria tribu de los Mandalorian, un pistolero solitario que trabaja en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.",
		},
		{
			id: 9,
			image: img8,
			name: "El Juego del Calamar",
			episodio: "Episodio 1",
			nombre: "Luz roja, luz verde",
			synopsis:
				"Con la esperanza de ganar dinero fácil, un Gi-hun quebrado y desesperado acepta participar en un juego enigmático. No mucho después de la primera ronda, se desarrollan horrores imprevistos.",
			about:
				"Cientos de jugadores cortos de dinero aceptan una extraña invitación a competir en juegos infantiles. Adentro les espera un premio irresistible... con un riesgo mortal.",
		},
	];

	const renderCard = (childElement, index) => {
		return (
			<Card
				style={{
					marginBottom: "20%",
					marginLeft: "2%",
					marginRight: "2%",
					width: "22.5rem",
					cursor: "pointer",
					backgroundColor: "#081826",
				}}
				key={childElement.id}
				className="box"
				onClick={_ => handleClickOnCard(childElement)}>
				<Card.Img variant="top" src={childElement?.image} />
				<Card.Body>
					<Card.Title>{childElement?.title}</Card.Title>
					<Card.Text>{childElement?.episodio}</Card.Text>
					<Card.Text>{childElement?.nombre}</Card.Text>
					<Card.Text>{childElement.porver}</Card.Text>
				</Card.Body>
			</Card>
		);
	};

	return (
		<Container fluid className="mt-4 text-white">
			{/*tittle of watching series*/}
			<Row>
				<Col xs={12}>
					<h3 className="ms-1">Viendo</h3>
				</Col>
			</Row>
			{/*row of watching series*/}
			<Row className="my-3">
				<Col xs={6}>{cardInfoViendo.map(renderCard)}</Col>
			</Row>
			{/*tittle of without starting series*/}
			<Row>
				<Col xs={12}>
					<h3 className="ms-1">Sin comenzar</h3>
				</Col>
			</Row>
			{/*row of without starting series*/}
			<Row className="my-3">
				<Col xs={6}>{cardInfoSin.map(renderCard)}</Col>
			</Row>
		</Container>
	);
};
