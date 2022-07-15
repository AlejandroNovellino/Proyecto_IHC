import img2 from "../../img/doctorstrange.jpg";
import img3 from "../../img/joker.jpg";
import img4 from "../../img/her.jpg";

import img5 from "../../img/shrek2.jpg";
import img6 from "../../img/enredados.jpg";

import img7 from "../../img/wanda.jpg";
import img8 from "../../img/dark.jpg";
import img9 from "../../img/kenobi.jpg";
import img10 from "../../img/deathnote.jpg";

const list1 = {
	name: "Series por ver",
	type: "SERIES",
	elements: [
		{
			id: 0,
			name: "WandaVision",
			src: img7,
		},
		{
			id: 1,
			name: "Dark",
			src: img8,
		},
		{
			id: 2,
			name: "Kenobi",
			src: img9,
		},
		{
			id: 3,
			name: "Death Note",
			src: img10,
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

export const userLists = [[list1, list2], [list3]];
