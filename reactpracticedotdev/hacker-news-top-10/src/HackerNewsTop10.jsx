import { useEffect, useState } from "react";

const HackerNewsTop10 = () => {
	const [top10, setTop10] = useState([]);

	useEffect(() => {
		(async () => {
			const topArticlesIdsResponse = await fetch(
				"https://hacker-news.firebaseio.com/v0/topstories.json"
			);
			const topArticlesIds = await topArticlesIdsResponse.json();
			const top10ArticlesIds = topArticlesIds.slice(0, 10);

			const top10Articles = await Promise.all(
				top10ArticlesIds.map(async (topArticleId) => {
					const topArticleResponse = await fetch(
						`https://hacker-news.firebaseio.com/v0/item/${topArticleId}.json`
					);
					return await topArticleResponse.json();
				})
			);

			setTop10(top10Articles);
		})();
	}, []);

	if (top10.length === 0) {
		return <p>Loading top articles...</p>;
	}

	return (
		<ul>
			{top10.map((article) => (
				<li key={article.id}>
					<p>
						<a href={article.url}>{article.title}</a>
					</p>
					<p>
						{article.score} by {article.by}
					</p>
				</li>
			))}
		</ul>
	);
};

export default HackerNewsTop10;
