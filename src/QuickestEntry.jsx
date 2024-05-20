import { useState } from "react";
import { ARTISTS_DATA } from "./pages/Artists";
import { uploadJson } from './components/firebase.js';

export const ORANGE_COLOR = "#ef880e";

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

const QuickestEntry = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("00:00");
  const [timeMs, setTimeMs] = useState("");
  const [savedMessageVisible, setSavedMessageVisible] = useState(false); // State for the visibility of the saved message

  const clear = () => {
    setName("");
    setTime("00:00");
    setTimeMs("");
  }
  const handleSave = () => {
    let min = Number(time.split(":")[0]);
    let sec = Number(time.split(":")[1]);
    let msec = timeMs;
    if (!isNumeric(msec)) {
      msec = 0;
    }
    let timeStr = time + "," + msec;
    const result = Number((min * 60 * 1000) + (sec * 1000) + Number(msec))
    console.log("=======")
    console.log(name)
    console.log(timeStr)
    console.log(msec)
    console.log(result)
    console.log("=======")
    if (name !== "") {
      uploadJson({ name: name, time: timeStr, ms: result });
      setSavedMessageVisible(true); // Show the saved message
      setTimeout(() => {
        setSavedMessageVisible(false); // Hide the saved message after 3 seconds
      }, 3000);
    }
    clear();
  }

  return (
    <div style={{ width: 300, margin: "auto", padding: "40px 0", display: "grid", placeContent: "center" }}>
      <p style={{ fontWeight: 800, fontSize: 22 }}>Artisti nimi</p>
      <select value={name} onChange={(e) => setName(e.target.value)} style={{ width: 300, height: 60 }} name="artists" id="artists">
        <option value={""}>-</option>
        {ARTISTS_DATA.map((artist) =>
          <option key={artist.name} value={artist.name}>{artist.name}</option>
        )}
      </select>
      <p style={{ fontWeight: 800, fontSize: 22, paddingTop: 20, marginBottom: 0 }}>Aeg</p>
      <div style={{ display: "flex", gap: 20 }}>
        <p style={{ flex: 1, paddingTop: 0 }}>mm:ss</p>
        <p style={{ flex: 1, paddingTop: 0}}>ms</p>
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <input value={time} onChange={(e) => setTime(e.target.value)} style={{ flex: 1, height: 60 }} id="foo" name="foo" type="time" min="0:00"></input>
        <input value={timeMs} onChange={(e) => setTimeMs(e.target.value)} style={{ flex: 1, height: 60 }} type="text"></input>
      </div>
      <button onClick={handleSave} style={{ width: 300, height: 60, backgroundColor: ORANGE_COLOR, fontSize: 18, fontWeight: 900, marginTop: 60, color: "black" }}>Salvesta</button>
      {savedMessageVisible && <div style={{ display: "flex", placeContent: "center", color: 'green', backgroundColor: ORANGE_COLOR + 63, height: 60, marginTop: 20, fontSize: 22, fontWeight: 800 }}>
        <p style={{ margin: "auto" }}>Salvestatud</p>
      </div>}
    </div>
  )
}

export default QuickestEntry;