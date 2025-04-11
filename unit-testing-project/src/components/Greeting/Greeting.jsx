import { useState } from "react";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function changeTextHandler() {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {changedText ? <p>Changed!</p> : <p>It's good to see you!</p>}
      <button onClick={changeTextHandler}>Change text!</button>
    </div>
  );
}
