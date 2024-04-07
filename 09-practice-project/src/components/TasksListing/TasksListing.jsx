import "./TasksListing.css";

export default function TasksListing({ currentProject, removeTask }) {
	return (
		<div className="tasks-listing">
			{currentProject.tasks.length > 0 ? (
				<ul className="tasks-listing__list">
					{currentProject.tasks.map((task, index) => {
						return (
							<li key={index} className="tasks-listing__list-item">
								<p>{task}</p>
								<button
									className="delete-btn"
									onClick={() => removeTask(task, currentProject.title)}
								>
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
