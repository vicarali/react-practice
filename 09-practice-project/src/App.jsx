import ProjectView from "./components/ProjectView/ProjectView";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import StartView from "./components/StartView/StartView";

function App() {
	const [projects, setProjects] = useState();

	return (
		<>
			<Sidebar />
			<main className="main-view">
				{projects ? <ProjectView /> : <StartView />}
			</main>
		</>
	);
}

export default App;
