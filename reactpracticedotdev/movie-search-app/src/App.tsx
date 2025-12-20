import { useState } from "react";
import "./App.css";
import { MoviesListing } from "./components/MoviesListing/MoviesListing";
import { MoviesSearcher } from "./components/MoviesSearcher/MoviesSearcher";
import type { Movie } from "./utils/types";

function App() {
	const [movies, setMovies] = useState<Movie[]>([]);

	return (
		<>
			<h1>Movies Search</h1>
			<MoviesSearcher onSearch={setMovies} />
			<MoviesListing movies={movies} />
		</>
	);
}

export default App;
