import ProjectView from "./components/ProjectView/ProjectView";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState, useRef } from "react";
import StartView from "./components/StartView/StartView";
import NewProjectForm from "./components/NewProjectForm/NewProjectForm";

function App() {
	const [projects, setProjects] = useState();
	const newProjectForm = useRef();

	return (
		<>
			<Sidebar newProjectForm={newProjectForm} />
			{projects ? (
				<ProjectView />
			) : (
				<StartView newProjectForm={newProjectForm} />
			)}
			<NewProjectForm ref={newProjectForm} />
		</>
	);
}

export default App;
