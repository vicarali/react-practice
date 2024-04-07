import ProjectView from "./components/ProjectView/ProjectView";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState, useRef } from "react";
import StartView from "./components/StartView/StartView";
import NewProjectForm from "./components/NewProjectForm/NewProjectForm";

function App() {
	const [projects, setProjects] = useState([]);
	const newProjectForm = useRef();

	/* Projects addition/removal */
	function addProject(project) {
		let listOfProjects = [];
		if (projects.length > 0) listOfProjects.push(...projects);

		listOfProjects.push(project);
		setProjects(listOfProjects);
		newProjectForm.current.toggle();
	}

	function handleProjectRemoval(projectTitle) {
		let listOfProjects = [];
		if (projects.length > 0) listOfProjects.push(...projects);

		const indexOfProject = getProjectIndexByTitle(projectTitle);
		listOfProjects.splice(indexOfProject, 1);

		if (listOfProjects.length > 0 == indexOfProject > 0)
			setCurrentProjectIndex(indexOfProject - 1);
		setProjects(listOfProjects);
	}

	/* Project tasks addition/removal */
	function addTask(task, projectTitle) {
		let listOfProjects = [];
		if (projects.length > 0) listOfProjects.push(...projects);
		const projectIndex = getProjectIndexByTitle(projectTitle);

		listOfProjects[projectIndex].tasks.push(task);
		setProjects(listOfProjects);
	}

	/* Active project change */
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

	function handleProjectChange(projectTitle) {
		const indexOfProject = getProjectIndexByTitle(projectTitle);

		setCurrentProjectIndex(indexOfProject);
	}

	function getProjectIndexByTitle(projectTitle) {
		return projects.findIndex((project) => project.title == projectTitle);
	}

	return (
		<>
			<Sidebar
				newProjectForm={newProjectForm}
				projectsListing={projects}
				onProjectChange={handleProjectChange}
				currentProject={currentProjectIndex}
			/>

			{projects.length > 0 ? (
				<ProjectView
					currentProject={projects[currentProjectIndex]}
					onProjectRemoval={handleProjectRemoval}
					addTask={addTask}
				/>
			) : (
				<StartView newProjectForm={newProjectForm} />
			)}

			<NewProjectForm ref={newProjectForm} onSaveForm={addProject} />
		</>
	);
}

export default App;
