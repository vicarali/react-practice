import "./TasksListing.css";

export default function TasksListing({ tasks }) {
	return (
		<div className="tasks-listing">
			{tasks.length > 0 ? (
				<ul className="tasks-listing__list">
					{tasks.map((task, index) => {
						return (
							<li key={index} className="tasks-listing__list-item">
								<p>{task}</p>
								<button className="delete-btn" key={index}>
									Clear
								</button>
							</li>
						);
					})}
				</ul>
			) : (
				<p>This project does not have any tasks yet.</p>
			)}
		</div>
	);
}
