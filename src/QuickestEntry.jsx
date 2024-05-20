import { useState } from "react";
import { ARTISTS_DATA } from "./pages/Artists";
import { uploadJson } from './components/firebase.js';

export const ORANGE_COLOR = "#ef880e";

const QuickestEntry = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("00:00");
  const [timeMs, setTimeMs] = useState(0);

  const clear = () => {
    setName("");
    setTime("00:00");
    setTimeMs(0);
  }
  const handleSave = () => {
    let min = Number(time.split(":")[0]);
    let sec = Number(time.split(":")[1]);
    let msec = Number(timeMs);
    if (timeMs && timeMs.toString().length > 1 && timeMs.toString().startsWith(0)) {
      console.log("badbad");
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
    clear();
    if (name !== "") {
      uploadJson({ name: name, time: timeStr, ms: result });
    }
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
        <input value={timeMs} onChange={(e) => setTimeMs(e.target.value)} style={{ flex: 1, height: 60 }} type="number"></input>
      </div>
      <button onClick={handleSave} style={{ width: 300, height: 60, backgroundColor: ORANGE_COLOR, fontSize: 18, fontWeight: 900, marginTop: 100 }}>Salvesta</button>
    </div>
  )
}

export default QuickestEntry;