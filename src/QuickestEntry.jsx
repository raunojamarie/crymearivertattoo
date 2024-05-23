import { useState } from "react";
import { ARTISTS_DATA } from "./pages/Artists";
import { uploadJson, getAllFiles } from './components/firebase.js';
import Picker from "./Picker";
import { useEffect } from "react";

export const ORANGE_COLOR = "#ef880e";

function cmp(a, b) {
  return a.ms - b.ms;
}

const ARTISTS_NAMES = [
  "Deniss Suhhanov",
  "Marta Liisa",
  "Santo Sueno",
  "Michael Stade",
  "Janis Kõrkjas",
  "Arina Stretškova",
  "Ave-Mari",
  "Ele-Helina Sein",
  "Iisak Pilli",
  "Janina Jakobson",
  "Kerli Laidna",
  "Kerli Luure",
  "Kaarel Krall",
  "Laura Käst",
  "Mari Uibo",
  "Nico Fibbioli",
  "Ramon Rattasep",
  "Silvia Volmar",
  "Kristjan Aosaar",
  "Ulrike Brett Uukkivi",
  "Liisa Kivimäe",
  "Darja",
  "Dmitri Hatsu",
  "Emilia Sabirova",
  "Darius Cloud",
  "Maria-Liisa Leonidov",
  "Sigrit Villido",
  "Tilda",
  "Aurika Kotyn",
  "Oleksandra Prepiialo",
  "Oskar Poll",
  "Piret Valdna",
  "Raine Kapp",
  "Sean Meade",
  "Villu Koger",
  "Desiree",
  "Maila Veske",
  "Fatima Susanna",
  "Mihkel Kosk",
  "Regina Kuznetsova",
  "Sten-Martin Sinisaar",
  "Vitaly Makurin",
  "Ulla-Mari",
  "Anatoliy Tovarnytskyy",
  "Ants Rauba",
  "Edmar Sulaoja",
  "Kairi Matt",
  "Priit Salusoo",
  "Roman Šestakov",
  "Nathan Norma",
  "Lorenzo Gentil",
  "Zahhar",
  "Andy Lap",
  "Samöwar"
];

const QuickestEntry = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("00:00:000");
  const [savedMessageVisible, setSavedMessageVisible] = useState(false); // State for the visibility of the saved message
  const [entries, setEntries] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getAllFiles();

      setEntries(res.sort(cmp));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const clear = () => {
    setName("");
    setTime("00:00:000");
  }
  const handleSave = () => {
    let min = Number(time.split(":")[0]);
    let sec = Number(time.split(":")[1]);
    let msec = Number(time.split(":")[2]);
    let timeStr = time.split(":")[0] + ":" + time.split(":")[1] + "," + time.split(":")[2];
    const result = Number((min * 60 * 1000) + (sec * 1000) + msec)
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
    <div style={{ width: 300, margin: "auto", paddingTop: 40, minHeight: "100vh" }}>
      <p style={{ fontWeight: 800, fontSize: 22 }}>Artisti nimi</p>
      <select value={name} onChange={(e) => setName(e.target.value)} style={{ width: 300, height: 60, fontSize: 18 }} name="artists" id="artists">
        <option value={""}>-</option>
        {ARTISTS_NAMES.sort((a, b) => a.localeCompare(b)).map((artist) =>
          <option key={artist} value={artist}>{artist}</option>
        )}
      </select>
      {entries.filter(e => e.name === name).length > 0
        ? <p style={{ color: "red" }}>Kirjutad hetkel üle <span style={{ fontWeight: 600 }}>{name}</span> aja: {entries.filter(e => e.name === name)[0].time}</p>
        : <></>
      }
      <p style={{ fontWeight: 800, fontSize: 22, paddingTop: 20, marginBottom: 20 }}>Aeg</p>
      <Picker
          value={time}
          onChange={value => {
            
            console.log(value)
            setTime(value)
          }}
        />
      <button onClick={handleSave} style={{ width: 300, height: 60, backgroundColor: ORANGE_COLOR, fontSize: 18, fontWeight: 900, marginTop: 60, color: "black" }}>Salvesta</button>
      {savedMessageVisible && <div style={{ display: "flex", placeContent: "center", color: 'green', backgroundColor: ORANGE_COLOR + 63, height: 60, marginTop: 20, fontSize: 22, fontWeight: 800 }}>
        <p style={{ margin: "auto" }}>Salvestatud</p>
      </div>}

      <p style={{ fontSize: 20, fontWeight: 800, marginTop: 40 }}>Salvestatud ajad</p>
      <div style={{ paddingBottom: 80 }}>
        <table style={{ width: "100%", fontSize: 12 }}>
          <tr style={{ backgroundColor: ORANGE_COLOR }}>
            <th style={{ padding: "20px 20px" }}>#</th>
            <th style={{ padding: "20px 20px" }}>Artist</th>
            <th style={{ padding: "20px 20px" }}>Aeg</th>
          </tr>
          {entries.map((entry, index) =>
            <tr key={entry.name} style={{ backgroundColor: index % 2 === 0 ? ORANGE_COLOR + 33 : ORANGE_COLOR + 63 }}>
              <td style={{ padding: "20px 20px" }}>{index + 1}</td>
              <td style={{ padding: "20px 20px" }}>{entry.name}</td>
              <td style={{ padding: "20px 20px" }}>{entry.time}</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  )
}

export default QuickestEntry;