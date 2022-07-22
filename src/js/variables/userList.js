import img2 from "../../img/doctorstrange.jpg";
import img3 from "../../img/joker.jpg";
import img4 from "../../img/her.jpg";

import img5 from "../../img/shrek2.jpg";
import img6 from "../../img/enredados.jpg";

import img7 from "../../img/wanda.jpg";
import img8 from "../../img/dark.jpg";
import img9 from "../../img/kenobi.jpg";
import img10 from "../../img/deathnote.jpg";

import img1Banner from "../../img/wandaBanner.jpg";
import img2Banner from "../../img/darkBanner.jpg";
import img3Banner from "../../img/kenobiBanner.jpg";
import img4Banner from "../../img/deathnoteBanner.jpg";
import img5Banner from "../../img/euphoriaBanner.jpg";
import img6Banner from "../../img/strangerBanner.jpg";
import img7Banner from "../../img/mandalorianBanner.jpg";
import img8Banner from "../../img/squidgameBanner.jpg";
import img9Banner from "../../img/witcherBanner.jpg";
import img10Banner from "../../img/arcaneBanner.jpg";

const list1 = {
	name: "Series por ver",
	type: "SERIES",
	elements: [
		{
			id: 0,
			name: "WandaVision",
			src: img7,
			image: img1Banner,
			about:
				"WandaVision combina el estilo cómico de situaciones clásicas con el Universo Cinematográfico de Marvel en el que Wanda Maximoff y Visión, dos seres superpoderosos que viven su vida suburbana ideal, comienzan a sospechar que no todo es lo que parece.",
		},
		{
			id: 1,
			name: "Dark",
			src: img8,
			image: img2Banner,
			about:
				"En Winden (2019), un pequeño pueblo ficticio situado en Alemania, la desaparición de un niño pone en alerta a todos los vecinos. El cuerpo de policía trata de investigar el caso sin hallar ninguna explicación. En el municipio viven cuatro familias: los Kahnwald, los Nielsen, los Doppler y los Tiedemann. Todas permanecen unidas ante los misteriosos acontecimientos. Sin embargo, todo cambia el día que Mikkel, el hijo menor de la familia Nielsen, desaparece sin dejar rastro.",
		},
		{
			id: 2,
			name: "Kenobi",
			src: img9,
			image: img3Banner,
			about:
				"Se centra en Obi-Wan Kenobi 10 años después del final de las Guerras Clon, donde enfrentó su mayor derrota: la caída y corrupción de su mejor amigo y aprendiz de Jedi, Anakin Skywalker quién se convirtió en el malvado Lord Sith Darth Vader.",
		},
		{
			id: 3,
			name: "Death Note",
			src: img10,
			image: img4Banner,
			about:
				"Light Yagami es un joven estudiante que un día encuentra un cuaderno llamado Death Note que tiene una macabra propiedad: si el nombre de una persona aparece escrito en él, morirá. Light decide, entonces, embarcarse en una misión para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective, intenta descifrar el misterio que rodea a todas estas muertes.",
		},
	],
};

const list2 = {
	name: "Peliculas por ver",
	type: "MOVIES",
	elements: [
		{
			id: 0,
			name: "Doctor Strange 2",
			src: img2,
			synopsis:
				"El Dr. Stephen Strange lanza un hechizo prohibido que abre un portal al multiverso. Sin embargo, surge una amenaza que puede ser demasiado grande para que su equipo la maneje.",
			year: 2022,
			gender: "Acción/Aventura",
			duration: "2h 6m",
		},
		{
			id: 1,
			name: "Guason",
			src: img3,
			synopsis:
				"Siempre solo en una multitud, el comediante fallido Arthur Fleck busca conexión mientras camina por las calles de Gotham City. Arthur usa dos máscaras: la que pinta para su trabajo diario como payaso y la apariencia que proyecta en un intento inútil de sentir que es parte del mundo que lo rodea. Aislado, intimidado y despreciado por la sociedad, Fleck comienza un lento descenso hacia la locura mientras se transforma en el cerebro criminal conocido como el Guasón.",
			year: 2019,
			gender: "Drama/Crimen",
			duration: "2h 2m",
		},
		{
			id: 2,
			name: "Ella",
			src: img4,
			synopsis:
				"Un hombre sensible y conmovedor se gana la vida escribiendo cartas personales para otras personas. Con el corazón roto después de que su matrimonio termina, Theodore (Joaquin Phoenix) queda fascinado con un nuevo sistema operativo que, según se informa, se convierte en una entidad intuitiva y única por derecho propio. Comienza el programa y conoce a Samantha (Scarlett Johansson), cuya brillante voz revela una personalidad sensible y juguetona. Aunque inicialmente eran 'amigos', la relación pronto se convierte en amor.",
			year: 1999,
			gender: "Romance/Ciencia ficción",
			duration: "2h 6m",
		},
	],
};

const list3 = {
	name: "Peliculas para los niños",
	type: "MOVIES",
	elements: [
		{
			id: 5,
			name: "Shrek 2",
			src: img5,
			synopsis:
				"Después de regresar de su luna de miel y mostrar películas caseras a sus amigos, Shrek y Fiona se enteran de que sus padres se enteraron de que se ha casado con su verdadero amor y desean invitarlo a su reino, llamado Far Far Away. El problema es que los padres de Fiona desconocen la maldición que golpeó a su hija y han asumido que se casó con el príncipe azul, no con un ogro de 700 libras con una higiene horrible y un amigo burro parlante.",
			year: 2004,
			gender: "Comedia/Aventura",
			duration: "1h 45m",
		},
		{
			id: 7,
			name: "Enredados",
			src: img6,
			synopsis:
				"Animación Disney de un cuento clásico. La hermosa princesa Rapunzel ha estado encerrada en una torre desde que una vieja bruja la capturó cuando era bebé. Su mágico cabello largo y rubio tiene el poder de brindarle la eterna juventud, y el malvado Gothel usa este poder para mantenerla joven. A la edad de 18 años, Rapunzel siente curiosidad por el mundo exterior, y cuando un príncipe usa su torre como refugio, le pide que la ayude a escapar.",
			year: 2010,
			gender: "Comedia/Musical",
			duration: "1h 40m",
		},
	],
};

export const userListProfile = [list1, list2, list3];
export const userLists = [[list1, list2], [list3]];
