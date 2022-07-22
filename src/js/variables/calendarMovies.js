import julio from "../../img/calendario/julio.png";
import agosto from "../../img/calendario/agosto.png";

import ThorLoveAndThunder from "../../img/calendario/movies/ThorLoveAndThunder.jpg";
import BlackAdam from "../../img/calendario/movies/BlackAdam.jpg";
import UnMundoExtrano from "../../img/calendario/movies/UnMundoExtrano.jpg";
import GatoBotas from "../../img/calendario/movies/GatoBotas.jpg";
import TrenBala from "../../img/calendario/movies/TrenBala.jpg";
import SuperMascotas from "../../img/calendario/movies/SuperMascotas.jpg";

export const calendarMovies = [
	{
		month: "Julio",
		image: julio,
		days: [
			{
				day: 28,
				movie: {
					name: "Thor Love And Thunder",
					synopsis:
						"El retiro de Thor es interrumpido por un asesino galáctico conocido como Gorr the God Butcher, que busca la extinción de los dioses. Para combatir la amenaza, Thor solicita la ayuda del Rey Valkyrie, Korg y su ex novia Jane Foster, quien, para sorpresa de Thor, empuña inexplicablemente su martillo mágico, Mjolnir, como el Poderoso Thor. Juntos, se embarcan en una angustiosa aventura cósmica para descubrir el misterio de la venganza del Dios Carnicero y detenerlo antes de que sea demasiado tarde.",
					src: ThorLoveAndThunder,
					gender: "Acción/Fantasía",
					duration: "2h",
					year: 2022,
				},
				cinema: "Cines Unidos, Sambil",
			},
			{
				day: 30,
				movie: {
					name: "Super Mascotas",
					synopsis:
						"Krypto the Super-Dog y Superman son mejores amigos inseparables, comparten los mismos superpoderes y luchan contra el crimen codo con codo en Metropolis. Sin embargo, Krypto debe dominar sus propios poderes para una misión de rescate cuando Superman es secuestrado.",
					src: SuperMascotas,
					gender: "Familia",
					duration: "1h 45m",
					year: 2022,
				},
				cinema: "Cines Unidos, Galarias Paraiso",
			},
			{
				day: 31,
				movie: {
					name: "Tren Bala",
					synopsis:
						"Cinco asesinos a bordo de un veloz tren bala descubren que sus misiones tienen algo en común.",
					src: TrenBala,
					gender: "Acción",
					duration: "1h 40m",
					year: 2022,
				},
				cinema: "Cines Unidos, Lider",
			},
		],
	},
	{
		month: "Agosto",
		image: agosto,
		days: [
			{
				day: 5,
				movie: {
					name: "El Gato Con Botas",
					synopsis:
						"El Gato con Botas descubre que su pasión por la aventura le ha pasado factura: ha quemado ocho de sus nueve vidas. Puss emprende un viaje épico para encontrar el último deseo mítico y restaurar sus nueve vidas.",
					src: GatoBotas,
					gender: "Familia/Aventura",
					duration: "1h 40m",
					year: 2022,
				},
				cinema: "Cinex, Tolon",
			},
			{
				day: 8,
				movie: {
					name: "Un Mundo Extraño",
					synopsis:
						"Los legendarios Clades son una familia de exploradores cuyas diferencias amenazaron con derrocar su misión más reciente y crucial.",
					src: UnMundoExtrano,
					gender: "Animada/Familia",
					duration: "2h",
					year: 2022,
				},
				cinema: "Cines Unidos, Sambil",
			},
			{
				day: 11,
				movie: {
					name: "Black Adam",
					synopsis:
						"Casi 5.000 años después de que se le concedieran los poderes todopoderosos de los dioses egipcios, y encarcelado con la misma rapidez, Black Adam (Johnson) es liberado de su tumba terrenal, listo para desatar su forma única de justicia en el mundo moderno.",
					src: BlackAdam,
					gender: "Acción/Fantasía",
					duration: "1h 40m",
					year: 2022,
				},
				cinema: "Cinex, Sambil",
			},
		],
	},
];
