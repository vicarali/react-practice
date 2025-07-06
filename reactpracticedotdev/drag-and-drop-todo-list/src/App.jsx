import { TaskInput } from "./components/TaskInput";
import ToDoList from "./components/ToDoList/ToDoList";
import { TasksContextProvider } from "./contexts/TasksContext";

function App() {
	return (
		<>
			<h1>TO DO LIST</h1>

			<TasksContextProvider>
				<TaskInput />
				<ToDoList />
			</TasksContextProvider>
		</>
	);
}

export default App;
