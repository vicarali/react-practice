import "./App.css";
import Accordion from "./Accordion/Accordion.tsx";
import items from "./utils/items.ts";

function App() {
  return <Accordion items={items} />;
}

export default App;
