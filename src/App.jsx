import './App.css';
import headerText from "./assets/header.png";
import tattooFest from "./assets/tattoofest.png";
import { FlipDate } from './FlipDate';
import useWindowDimensions from './useWindowDimensions.jsx';

export const ORANGE_COLOR = "#fb8300";

const App = () => {
  const { height, width } = useWindowDimensions();

  const isMobile = width <= 425;
  const isBreakpoint = width <= 1100;
  const isBreakpoint2 = width <= 540;
  const navbarCollapse = width <= 990;

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
        zIndex: 999,
        opacity: isMobile ? 0 : 1
      }}>
        <div className="navbar-menu" style={{
          display: "flex",
          width: "100%",
          fontSize: 28,
          fontWeight: 900,
          justifyContent: "center",
          color: "white",
        }}>
          {navbarCollapse
            ? <div className="navbar-logo" style={{
                height: 100, display: "flex", color: ORANGE_COLOR, margin: 0
              }}>
                <p>crymearivertattoo</p>
              </div>
            : <div className="navbar-logo" style={{
                width: 100, height: 100, display: "flex", paddingRight: 60, color: ORANGE_COLOR
              }}>
                <p>crymearivertattoo</p>
              </div>

          }
          <div className="navbar-menu-options" style={{ fontSize: 20, display: "flex", width: "100%", justifyContent: "end", textTransform: "uppercase" }}>
            <p>AVALEHT</p>
            <p>ARTISTID</p>
            <p>RAHVAHÄÄLETUS</p>
            <p>TARTU 2024</p>
            <p>KONTAKT</p>
            <p>ET</p>
          </div>
        </div>
      </div>
      <div className="main-header" style={{ width: "100%", height: height, overflow: "hidden" }}>
        <div style={{
          display: "flex",
          flexDirection: navbarCollapse ? "column" : "row",
          height: "calc(100% - 100px)",
          margin: "0 auto",
          marginTop: 100,
          width: isBreakpoint ? width - 20 : width - 200
        }}>
          <div style={{ flex: 1, display: "grid", justifyContent: "center", alignContent: "center", zIndex: 3 }}>
            <div style={{ width: "100%" }}>
              <img style={{ width: "100%" }} src={headerText}></img>
              <img style={{ marginTop: navbarCollapse ? -40 : -60, width: "100%" }} src={tattooFest}></img>
            </div>
          </div>
          <div style={{ flex: 1, display: "grid", justifyContent: "center", alignContent: navbarCollapse ? "" : "center", zIndex: 3 }}>
            <div className="counter-wrapper" style={{ width: "fit-content" }}>
              <p style={{ paddingLeft: 12, color: "white", padding: 0, margin: 0, fontSize: 20}}>ALGAB JUBA</p>
              <FlipDate />
              <div style={{ display: "flex", height: 30, width: "100%", fontSize: 18, color: ORANGE_COLOR, textTransform: "lowercase" }}>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0}}>PÄEVA</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0}}>TUNNI</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0}}>MINUTI</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0}}>SEKUNDI</p>
                </div>
              </div>
              <div style={{ display: "grid", justifyContent: "end" }}>
                <p style={{ color: "white", padding: 0, margin: 0, fontSize: 20}}>PÄRAST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
