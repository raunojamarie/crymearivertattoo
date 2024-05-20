import './styles/App.css';
import './styles/responsive.css';
import nimi from "./assets/nimi.png";
import useWindowDimensions from './useWindowDimensions.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useEffect, useState,  } from 'react';
import { getAllFiles } from './components/firebase.js';
import './quickest.css';

export const ORANGE_COLOR = "#ef880e";
export const GREEN_COLOR = "#7d922b";

function cmp(a, b) {
  return a.ms - b.ms;
}

const QuickestTable = () => {
  const [entries, setEntries] = useState([]);
  const { height, width } = useWindowDimensions();

  const isMobile = width <= 600;

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

  return (
    <div id="home" className="app-root" style={{ height: "100%", width: "100%" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 90, backgroundColor: "black" }}>
      </div>
      <div className="navbar black-bacgkround" style={{
        position: "fixed",
        top: 0, right: 0, left: 0,
        height: 90,
        display: "flex",
        borderBottom: "none",
        zIndex: 999,
        placeContent: "center",
        opacity: 0.95,
        position: "relative"
      }}>
        <div style={{ position: "absolute", left: "43%", top: "22%", color: "white", fontSize: 30, fontWeight: 800 }}>
          Quickest Tattoo
        </div>
        <div className="navbar-menu color-white" style={{
          display: "flex",
          width: "100%",
          fontSize: 28,
          fontWeight: 900,
          justifyContent: "start",
        }}>
          <AnchorLink offset={90} className="nav-option navbar-logo" style={{ color: ORANGE_COLOR }} href='#home'>
            <div style={{ paddingLeft: 0, height: "100%", display: "grid", placeContent: "center" }}>
              <img style={{ height: 60, margin: "0 auto" }} src={nimi}></img>
            </div>
          </AnchorLink>

        </div>
      </div>

      <div className="main-header" style={{
        height: isMobile ? "100%" : "100vh", paddingTop: 40, backgroundColor: "#fff"
      }}>
        <table style={{ margin: "auto" }}>
          <tr style={{ backgroundColor: ORANGE_COLOR }}>
            <th style={{ padding: "20px 40px" }}>#</th>
            <th>Artist</th>
            <th>Aeg</th>
          </tr>
          {entries.map((entry, index) =>
            <tr key={entry.name} style={{ backgroundColor: index % 2 === 0 ? ORANGE_COLOR + 33 : ORANGE_COLOR + 63 }}>
              <td style={{ padding: "20px 40px" }}>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.time}</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}

export default QuickestTable;
