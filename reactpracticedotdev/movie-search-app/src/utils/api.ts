import type { Movie } from "./types";

export async function getFilteredMovies(movieQuery: string): Promise<Movie[]> {
	const movies = await getMoviesFromAPI(movieQuery);

	return movies.filter((movie) => movie.poster_path && movie.overview);
}

async function getMoviesFromAPI(movieQuery: string): Promise<Movie[]> {
	const moviesAPIAccessToken = import.meta.env.VITE_MOVIE_API_ACCESS_TOKEN;
	const APIURL = `https://api.themoviedb.org/3/search/movie?query=${movieQuery}`;
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${moviesAPIAccessToken}`
		}
	};

	const response = await fetch(APIURL, options)
		.then((res) => res.json())
		.catch((err) => console.error(err));

	return response.results;
}
