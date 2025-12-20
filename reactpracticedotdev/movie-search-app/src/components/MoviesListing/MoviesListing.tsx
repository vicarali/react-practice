import type { Movie } from "../../utils/types";
import styles from "./MoviesListing.module.css";

export function MoviesListing({ movies }: { movies: Movie[] }) {
	const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w342";

	return (
		<ul className={styles.moviesListing}>
			{movies &&
				movies.map((movie) => (
					<li key={movie.id} className={styles.movie}>
						<img
							className={styles.moviePoster}
							src={`${POSTER_BASE_URL}${movie.poster_path}`}
							alt=""
						/>
						<h2>{movie.title}</h2>
						<p className={styles.movieOverview}>{movie.overview}</p>
					</li>
				))}
		</ul>
	);
}
