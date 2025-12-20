import { useState, type ReactElement } from "react";
import styles from "./MoviesSearcher.module.css";
import { getFilteredMovies } from "../../utils/api";
import type { MoviesSearcherProps } from "./types";

export function MoviesSearcher({
	onSearch
}: MoviesSearcherProps): ReactElement {
	const [movieQuery, setMovieQuery] = useState("");

	async function handleSearch(
		event: React.FormEvent<HTMLFormElement>
	): Promise<void> {
		event.preventDefault();
		onSearch(await getFilteredMovies(movieQuery));
	}

	return (
		<form role="search" className={styles.container} onSubmit={handleSearch}>
			<label htmlFor="movie-search-input">Search for a movie</label>
			<input
				id="movie-search-input"
				type="search"
				value={movieQuery}
				onChange={(event) => setMovieQuery(event.target.value)}
			/>
			<button>Search</button>
		</form>
	);
}
