import './App.css';
import plakat from "./assets/Pilt4.jpg";
import logo from "./assets/logo.png";
import headerText from "./assets/header.png";
import tattooFest from "./assets/tattoofest.png";
import { FlipDate } from './FlipDate';

function App() {

  const ORANGE_COLOR = "#fb8300";
  return (
    <div className="app-root">
      <div className="navbar" style={{
        position: "fixed",
        top: 0, right: 0, left: 0,
        height: 100,
        backgroundColor: "black",
        display: "flex",
        paddingLeft: 40,
        paddingRight: 40,
        zIndex: 999
      }}>
        <div className="navbar-menu" style={{
          display: "flex",
          width: "100%",
          fontSize: 28,
          fontWeight: 900,
          justifyContent: "center",
          color: "white"
        }}>
          <div className="navbar-logo" style={{ width: 100, height: 100, display: "flex", paddingRight: 60, color: ORANGE_COLOR}}>
            <p>crymearivertattoo</p>
          </div>
          <div style={{ fontSize: 20, display: "flex", width: "100%", justifyContent: "end", textTransform: "uppercase" }}>
            <p>AVALEHT</p>
            <p>ARTISTID</p>
            <p>RAHVAHÄÄLETUS</p>
            <p>TARTU 2024</p>
            <p>KONTAKT</p>
            <p>ET</p>
          </div>
        </div>
      </div>
      <div className="main-header" style={{ display: "flex", width: "100%", height: "100%" }}>
        <img src={plakat} alt="" style={{ width: "100%", height: "100vh", marginLeft: 600 }} />

        <div style={{ position: "absolute", top: 160, left: 100, width: 800 }}>
          <img style={{ width: "100%" }} src={headerText}></img>
          <img style={{ marginTop: "-90px", width: "100%" }} src={tattooFest}></img>
        </div>
        <div className="counter-wrapper" style={{ position: "absolute", top: 360, left: 1020 }}>
          <p style={{ paddingLeft: 12, color: "white", padding: 0, margin: 0, fontSize: 20}}>ALGAB JUBA</p>
          <FlipDate />
          <div style={{ paddingRight: 12, display: "grid", justifyContent: "end" }}>
            <p style={{ color: "white", padding: 0, margin: 0, fontSize: 20}}>PÄRAST</p>
          </div>
        </div>

      </div>
      <div className="main-content" style={{ height: 2400}}>
        <div></div>
      </div>
      <div className="main-footer" style={{ height: 300, backgroundColor: "black", display: "grid", justifyContent: "center"}}>
        <p style={{margin: "auto 0", color: "white", fontSize: 30, fontWeight: 900}}>
          FOOTER
        </p>
      </div>
    </div>
  );
}

export default App;
