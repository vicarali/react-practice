import "./App.css";
import { ContactInput } from "./components/ContactInput/ContactInput";
import { ContactListing } from "./components/ContactListing/ContactListing";
import { ContactsContextProvider } from "./contexts/ContactsContextProvider";

function App() {
	return (
		<ContactsContextProvider>
			<main>
				<h1>Contact Book</h1>
				<h2>Keep track of where your friends live</h2>
				<ContactInput />
				<ContactListing />
			</main>
		</ContactsContextProvider>
	);
}

export default App;
