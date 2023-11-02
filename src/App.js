import './App.css';
import plakat from "./assets/plakat-resized-cropped.jpg";
import logo from "./assets/logo.png";

function App() {
  const ORANGE_COLOR = "#fb8300";
  return (
    <div className="app-root">
      <div className="navbar" style={{
        position: "fixed",
        top: 0, right: 0, left: 0,
        height: 200,
        backgroundColor: "rgb(0, 0, 0, 0.8)",
        display: "flex",
        paddingLeft: 300,
        paddingRight: 300
      }}>
        <div className="navbar-menu" style={{
          display: "flex",
          width: "100%",
          fontSize: 28,
          fontWeight: 900,
          justifyContent: "center",
          color: "white"
        }}>
          <div className="navbar-logo" style={{ width: 200, height: 200, display: "flex", paddingRight: 60}}>
           <img alt="" src={logo} style={{ height: "100%", display: "block", margin: "auto", borderRadius: "50%" }}></img>
          </div>
          <p>AVALEHT</p>
          <p>KAVA</p>
          <p>ARTISTID</p>
          <p>HÄÄLETUS</p>
          <p>GALERII</p>
          <p>KONTAKT</p>
        </div>
      </div>
      <div className="main-header" style={{ width: "100%", height: "100%"}}>
        <img src={plakat} alt="" style={{ width: "100%" }} />
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
