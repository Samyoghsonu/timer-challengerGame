import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  // const [name, setName] = useState("");
  // const [finalName, setFinalName] = useState("unknown entity");
  // const handleChange = (event) => {
  //   return setName(event.target.value);
  // };
  // const handleClick = () => {
  //   return setFinalName(name);
  // };
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
