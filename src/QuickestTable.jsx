import './styles/App.css';
import './styles/responsive.css';
import nimi from "./assets/nimi.png";
import useWindowDimensions from './useWindowDimensions.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useEffect, useState, } from 'react';
import { getAllFiles } from './components/firebase.js';
import headerText from "./assets/logo.png";
import loss from "./assets/loss.png"
import './quickest.css';
import { ARTISTS_DATA } from './pages/Artists';

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
    <div id="home" className="app-root" style={{ height: "100%", width: "100%", minHeight: "100vh", backgroundColor: "#000" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 90 }}>
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
        <div style={{ position: "absolute", left: "43%", top: "25%", color: "white", fontSize: 34, fontWeight: 800 }}>
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
        <div style={{ display: "flex", marginTop: 180, position: "absolute", zIndex: 1 }}>
          <div className="" style={{ position: "relative", flex: 1, display: "grid", justifyContent: "center", alignContent: isMobile ? "" : "center" }}>
            <img src={loss} alt="" style={{ width: "100%", margin: "0 auto", paddingTop: isMobile ? 60 : 0, opacity: 0.5, marginTop: -40 }}></img>
          </div>
          <div className="" style={{ position: "relative", flex: 1, display: "grid", justifyContent: "center", alignContent: isMobile ? "" : "center" }}>
            <img src={loss} alt="" style={{ width: "100%", margin: "0 auto", paddingTop: isMobile ? 60 : 0, opacity: 0.5, marginTop: -40 }}></img>
          </div>
        </div>
      </div>
      <div style={{ padding: "20px 0 200px 0", position: "relative" }}>
        <table className="absolute-centered" style={{ margin: "auto", position: "absolute", zIndex: 9999, backgroundColor: "#000" }}>
          <tr style={{ backgroundColor: GREEN_COLOR }}>
            <th className='big-title-black' style={{ padding: "18px 40px" }}>#</th>
            <th className='big-title-black'>Artist</th>
            <th className='big-title-black'>Aeg</th>
          </tr>
          {entries.slice(0, 11).map((entry, index) =>
            <tr key={entry.name} style={{
              color: entry.name === "Samowar" ?
                "#ef880e !important" :
                "#000",
              backgroundColor:
                index === 0
                  ? "#95AD34" : index === 1 ? "#ACC743" : index === 2 ? "#BAD062"
                    : index % 2 === 0
                      ? "#f0f0f0"
                      : "lightgrey"
            }}>
              <td style={{ padding: "18px 40px 18px 50px" }}>{index + 1}</td>
              <td>
                <div className='title-black' style={{ position: "relative", color: entry.name === "Samowar" ? ORANGE_COLOR : "#000" }}>
                  {ARTISTS_DATA.filter(e => e.name === entry.name).length > 0 &&
                    <div className="circular" style={{ position: "absolute", left: -160, top: -15, width: 60, height: 60 }}>
                      <img className="artist-img" alt="" src={ARTISTS_DATA.find(e => e.name === entry.name)?.img}></img>
                    </div>
                  }
                  {entry.name}
                </div>
              </td>
              <td style={{ color: entry.name === "Samowar" ? ORANGE_COLOR : "#000", fontSize: 24, fontWeight: 800 }}>{renderTime(entry.time)}</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}

const renderTime = (time) => {
  const timeStr = String(time);
  const ms = timeStr.split(",")[1];
  if (ms === "000") {
    return timeStr.substring(0, 8);
  }
  return timeStr.substring(0, 8);
}

export default QuickestTable;
