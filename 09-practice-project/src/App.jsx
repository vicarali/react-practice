import ProjectView from "./components/ProjectView/ProjectView";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import StartView from "./components/StartView/StartView";
import NewProjectForm from "./components/NewProjectForm/NewProjectForm";

function App() {
	const [projects, setProjects] = useState();

	return (
		<>
			<Sidebar />
			<main id="main-view" className="main-view">
				{projects ? <ProjectView /> : <StartView />}
				<NewProjectForm />
			</main>
		</>
	);
}

export default App;
