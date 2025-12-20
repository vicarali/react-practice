import type { Movies } from "../utils/types";

export type MoviesSearcherProps = {
	onSearch: (movies: Movies[]) => void;
};
