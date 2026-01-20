// You can retrieve the pokemons by calling the following API
// Make sure to replace limit and offset with the appropriate values
// https://pokeapi.co/api/v2/pokemon?limit=5&offset=0

import { useEffect, useState, useRef } from "react";

const POKE_API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon";
const RESULTS_PAGINATION_DEFAULT = 5;

const PokemonList = () => {
	const totalPokemons = useRef();
	const [pokemons, setPokemons] = useState([]);
	const [currentResults, setCurrentResults] = useState(
		RESULTS_PAGINATION_DEFAULT
	);
	const areLastResults = currentResults == totalPokemons.current;

	useEffect(() => {
		(async () => {
			let resultsLimit = RESULTS_PAGINATION_DEFAULT;

			if (
				totalPokemons.current &&
				currentResults + RESULTS_PAGINATION_DEFAULT >= totalPokemons.current
			)
				resultsLimit = totalPokemons.current - currentResults;

			const response = await fetch(
				`${POKE_API_ENDPOINT}?limit=${resultsLimit}&offset=${
					currentResults - resultsLimit
				}`
			);
			const result = await response.json();

			if (totalPokemons.current === undefined)
				totalPokemons.current = result.count;
			setPokemons((previousPokemons) => [
				...previousPokemons,
				...result.results
			]);
		})();
	}, [currentResults]);

	useEffect;

	function handleLoadMore() {
		setCurrentResults((previousResults) => {
			let newResults = previousResults + RESULTS_PAGINATION_DEFAULT;
			if (newResults >= totalPokemons.current)
				newResults = totalPokemons.current;

			return newResults;
		});
	}

	return (
		<div>
			<ul>
				{pokemons.map((pokemon) => (
					<li key={pokemon.name}>{pokemon.name}</li>
				))}
			</ul>
			<p>
				Displaying {currentResults} of {totalPokemons.current} results
			</p>
			{!areLastResults && <button onClick={handleLoadMore}>Load more</button>}
		</div>
	);
};

export default PokemonList;
