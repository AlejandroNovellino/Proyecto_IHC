import img1 from "../../img/matrix.jpg";
import img2 from "../../img/doctorstrange.jpg";
import img3 from "../../img/joker.jpg";
import img4 from "../../img/her.jpg";
import img5 from "../../img/shrek2.jpg";
import img6 from "../../img/kimetsu.jpg";
import img7 from "../../img/dune.jpg";
import img8 from "../../img/enredados.jpg";
import img9 from "../../img/insideout.jpg";
import img10 from "../../img/parasitos.jpg";

export const savedMovies = [
	[
		{
			id: 2,
			name: "Doctor Strange 2",
			src: img2,
			synopsis:
				"El Dr. Stephen Strange lanza un hechizo prohibido que abre un portal al multiverso. Sin embargo, surge una amenaza que puede ser demasiado grande para que su equipo la maneje.",
			year: 2022,
			gender: "Acción/Aventura",
			duration: "2h 6m",
		},
		{
			id: 3,
			name: "Guason",
			src: img3,
			synopsis:
				"Siempre solo en una multitud, el comediante fallido Arthur Fleck busca conexión mientras camina por las calles de Gotham City. Arthur usa dos máscaras: la que pinta para su trabajo diario como payaso y la apariencia que proyecta en un intento inútil de sentir que es parte del mundo que lo rodea. Aislado, intimidado y despreciado por la sociedad, Fleck comienza un lento descenso hacia la locura mientras se transforma en el cerebro criminal conocido como el Guasón.",
			year: 2019,
			gender: "Drama/Crimen",
			duration: "2h 2m",
		},
	],
	[
		{
			id: 4,
			name: "Ella",
			src: img4,
			synopsis:
				"Un hombre sensible y conmovedor se gana la vida escribiendo cartas personales para otras personas. Con el corazón roto después de que su matrimonio termina, Theodore (Joaquin Phoenix) queda fascinado con un nuevo sistema operativo que, según se informa, se convierte en una entidad intuitiva y única por derecho propio. Comienza el programa y conoce a Samantha (Scarlett Johansson), cuya brillante voz revela una personalidad sensible y juguetona. Aunque inicialmente eran 'amigos', la relación pronto se convierte en amor.",
			year: 1999,
			gender: "Romance/Ciencia ficción",
			duration: "2h 6m",
		},
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
	],
	[
		{
			id: 7,
			name: "Enredados",
			src: img8,
			synopsis:
				"Animación Disney de un cuento clásico. La hermosa princesa Rapunzel ha estado encerrada en una torre desde que una vieja bruja la capturó cuando era bebé. Su mágico cabello largo y rubio tiene el poder de brindarle la eterna juventud, y el malvado Gothel usa este poder para mantenerla joven. A la edad de 18 años, Rapunzel siente curiosidad por el mundo exterior, y cuando un príncipe usa su torre como refugio, le pide que la ayude a escapar.",
			year: 2010,
			gender: "Comedia/Musical",
			duration: "1h 40m",
		},
	],
];

export const recommendedMovies = [
	[
		{
			id: 0,
			name: "Matrix",
			src: img1,
			synopsis:
				"Thomas Anderson, un programador de computadoras, se ve obligado a librar una guerra clandestina contra poderosas computadoras que han construido toda su realidad con un sistema llamado Matrix.",
			year: 1999,
			gender: "Ciencia ficción/Acción",
			duration: "2h 16m",
		},
		{
			id: 1,
			name: "Kimetsu",
			src: img6,
			synopsis:
				"Tanjiro, Nezuko, Zenitsu e Inosuke suben a un tren para ayudar al Hashira de la Llama Kyōjurō Rengoku en su misión de dar caza a un demonio que ha matado a muchos Cazadores de Demonios. ",
			year: 2020,
			gender: "Acción/Fantasía",
			duration: "1h 57m",
		},
	],
	[
		{
			id: 2,
			name: "Dune",
			src: img7,
			synopsis:
				"Paul Atreides, un brillante y talentoso joven nacido en un gran destino más allá de su comprensión, debe viajar al planeta más peligroso del universo para asegurar el futuro de su familia y su pueblo. A medida que las fuerzas malévolas estallan en un conflicto por el suministro exclusivo del planeta del recurso más preciado que existe, solo sobrevivirán aquellos que puedan vencer su propio miedo.",
			year: 2021,
			gender: "Ciencia ficción/Aventura",
			duration: "2h 35m",
		},
		{
			id: 3,
			name: "Enredados",
			src: img8,
			synopsis:
				"Animación Disney de un cuento clásico. La hermosa princesa Rapunzel ha estado encerrada en una torre desde que una vieja bruja la capturó cuando era bebé. Su mágico cabello largo y rubio tiene el poder de brindarle la eterna juventud, y el malvado Gothel usa este poder para mantenerla joven. A la edad de 18 años, Rapunzel siente curiosidad por el mundo exterior, y cuando un príncipe usa su torre como refugio, le pide que la ayude a escapar.",
			year: 2010,
			gender: "Comedia/Musical",
			duration: "1h 40m",
		},
	],
	[
		{
			id: 4,
			name: "Intensamente",
			src: img9,
			synopsis:
				"Riley (Kaitlyn Dias) es una niña del Medio Oeste de 11 años, feliz y amante del hockey, pero su mundo se pone patas arriba cuando ella y sus padres se mudan a San Francisco. Las emociones de Riley, dirigidas por Joy (Amy Poehler), intentan guiarla a través de este evento difícil que le cambiará la vida. Sin embargo, el estrés de la mudanza trae a Tristeza (Phyllis Smith) al frente. Cuando la Alegría y la Tristeza son arrastradas inadvertidamente a los confines de la mente de Riley, las únicas emociones que quedan en el Cuartel General son la Ira, el Miedo y el Disgusto.",
			year: 2015,
			gender: "Familia/Comedia",
			duration: "1h 35m",
		},
		{
			id: 5,
			name: "Parasitos",
			src: img10,
			synopsis:
				"La codicia y la discriminación de clase amenazan la relación simbiótica recién formada entre la rica familia Park y el clan Kim, que está en la miseria.",
			year: 1999,
			gender: "Suspenso/Drama",
			duration: "2h 12m",
		},
	],
];

export const popularMovies = [
	[
		{
			id: 0,
			name: "Matrix",
			src: img1,
			synopsis:
				"Thomas Anderson, un programador de computadoras, se ve obligado a librar una guerra clandestina contra poderosas computadoras que han construido toda su realidad con un sistema llamado Matrix.",
			year: 1999,
			gender: "Ciencia ficción/Acción",
			duration: "2h 16m",
		},
		{
			id: 1,
			name: "Kimetsu",
			src: img6,
			synopsis:
				"Tanjiro, Nezuko, Zenitsu e Inosuke suben a un tren para ayudar al Hashira de la Llama Kyōjurō Rengoku en su misión de dar caza a un demonio que ha matado a muchos Cazadores de Demonios. ",
			year: 2020,
			gender: "Acción/Fantasía",
			duration: "1h 57m",
		},
	],
	[
		{
			id: 2,
			name: "Dune",
			src: img7,
			synopsis:
				"Paul Atreides, un brillante y talentoso joven nacido en un gran destino más allá de su comprensión, debe viajar al planeta más peligroso del universo para asegurar el futuro de su familia y su pueblo. A medida que las fuerzas malévolas estallan en un conflicto por el suministro exclusivo del planeta del recurso más preciado que existe, solo sobrevivirán aquellos que puedan vencer su propio miedo.",
			year: 2021,
			gender: "Ciencia ficción/Aventura",
			duration: "2h 35m",
		},
		{
			id: 3,
			name: "Enredados",
			src: img8,
			synopsis:
				"Animación Disney de un cuento clásico. La hermosa princesa Rapunzel ha estado encerrada en una torre desde que una vieja bruja la capturó cuando era bebé. Su mágico cabello largo y rubio tiene el poder de brindarle la eterna juventud, y el malvado Gothel usa este poder para mantenerla joven. A la edad de 18 años, Rapunzel siente curiosidad por el mundo exterior, y cuando un príncipe usa su torre como refugio, le pide que la ayude a escapar.",
			year: 2010,
			gender: "Comedia/Musical",
			duration: "1h 40m",
		},
	],
	[
		{
			id: 4,
			name: "Intensamente",
			src: img9,
			synopsis:
				"Riley (Kaitlyn Dias) es una niña del Medio Oeste de 11 años, feliz y amante del hockey, pero su mundo se pone patas arriba cuando ella y sus padres se mudan a San Francisco. Las emociones de Riley, dirigidas por Joy (Amy Poehler), intentan guiarla a través de este evento difícil que le cambiará la vida. Sin embargo, el estrés de la mudanza trae a Tristeza (Phyllis Smith) al frente. Cuando la Alegría y la Tristeza son arrastradas inadvertidamente a los confines de la mente de Riley, las únicas emociones que quedan en el Cuartel General son la Ira, el Miedo y el Disgusto.",
			year: 2015,
			gender: "Familia/Comedia",
			duration: "1h 35m",
		},
		{
			id: 5,
			name: "Parasitos",
			src: img10,
			synopsis:
				"La codicia y la discriminación de clase amenazan la relación simbiótica recién formada entre la rica familia Park y el clan Kim, que está en la miseria.",
			year: 1999,
			gender: "Suspenso/Drama",
			duration: "2h 12m",
		},
	],
];
