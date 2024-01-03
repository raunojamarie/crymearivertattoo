import './App.css';
import headerText from "./assets/logo.png";
import tattooFest from "./assets/tattoofest.png";
import barbwire from "./assets/barbwire.png";
import kett from "./assets/kett.png";
import loss from "./assets/loss.png"
import drip from "./assets/drip.png";
import needleLeft from "./assets/needle_left.png";
import needleRight from "./assets/needle_right.png";
import { FlipDate } from './components/FlipDate';
import useWindowDimensions from './useWindowDimensions.jsx';
import Artists from './pages/Artists';
import Timeline from './pages/Timeline';
import Footer from './components/Footer';
import Haaletus from './pages/haaletus';
import Tartu from './pages/tartu';


export const ORANGE_COLOR = "#fb8300";

const dripEnabled = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams)
  return urlParams.toString().includes("drip");

}

const App = () => {
  const { height, width } = useWindowDimensions();

  const isMobile = width <= 600;
  const isTablet = width <= 768;
  const isBreakpoint = width <= 1100;
  const isBreakpoint2 = width <= 540;
  const navbarCollapse = width <= 990;

  return (
    <div className="app-root" style={{ height: "100%", width: "100%" }}>
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
            <p>AJAKAVA</p>
            <p>RAHVAHÄÄLETUS</p>
            <p>TARTU 2024</p>
            <p>KONTAKT</p>
            <p>ET</p>
          </div>
        </div>
      </div>

      <div className="main-header" style={{ position: "relative", height: "100vh"}}>
        {dripEnabled() && <img src={drip} alt="" style={{ position: "absolute", width: "100%", height: 268, bottom: -268, left: 0, zIndex: 1}}></img>}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          height: "calc(100% - 100px)",
          margin: "0 auto",
          marginTop: isMobile ? 0 : 100,
          width: isBreakpoint ? width - 20 : width - 200
        }}>
          <div style={{ flex: 1, display: "grid", justifyContent: "center", alignContent: "center", zIndex: 3 }}>
            <div style={{ width: "100%" }}>
              <img style={{ width: "100%" }} src={headerText}></img>
              <img style={{ marginTop: isMobile ? -40 : -60, width: "100%" }} src={tattooFest}></img>
            </div>
          </div>
          <div className="" style={{ position: "relative", flex: 1, display: "grid", justifyContent: "center", alignContent: isMobile ? "" : "center", zIndex: 3 }}>
            <img src={loss} style={{ width: "calc(100%)", opacity: 0.5, marginTop: -40 }}></img>
            <div className="counter-wrapper" style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                top: "40%",
                left: 0,
                right: 0,
                textAlign: "center",
                width: "fit-content" }}>
              <p style={{ textAlign: "left", paddingLeft: 12, color: "white", padding: 0, margin: 0, fontSize: 20 }}>ALGAB JUBA</p>
              <FlipDate />
              <div style={{ display: "flex", height: 30, width: "100%", fontSize: 18, color: ORANGE_COLOR, textTransform: "lowercase" }}>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>PÄEVA</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>TUNNI</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>MINUTI</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>SEKUNDI</p>
                </div>
              </div>
              <div style={{ display: "grid", justifyContent: "end" }}>
                <p style={{ color: "white", padding: 0, margin: 0, fontSize: 20 }}>PÄRAST</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      
        
      <Artists />
      <Timeline />
      <Haaletus />
      <Tartu />


      <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
        <p style={{ position: "relative", backgroundColor: ORANGE_COLOR, fontSize: 32, width: "fit-content", margin: "0 auto", marginBottom: 40, border: "6px solid black", padding: "4px 40px", zIndex: 4 }}>
          KONTAKT
        </p>
        <div style={{ position: "absolute", width: "100%", borderTop: "6px solid black", top: 30, zIndex: 1 }}></div>
        <div style={{ display: "flex", flexDirection: isTablet ? "column" : "row",
              width: "80%", maxWidth: 1200, margin: "0 auto", marginBottom: 40, alignItems: "center" }}>
          
          <div style={{ flex: 1, height: "100%" }}>
          <p style={{ position: "relative", /* backgroundColor: ORANGE_COLOR, */ fontSize: 32, width: "fit-content", margin: "0 auto", marginBottom: 40, /* border: "6px solid black", */ padding: "4px 40px", zIndex: 4 }}>
          KUS ME ASUME?
        </p>
            <iframe
              width="100%"
              height={450}
              style={{border: "6px solid rgb(0,0,0,0)"}}
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCS0QexUfZnKgG0siTOuOwlVCFGmOSVfwI
                &q=Harbour+Theatre,Tartu+Estonia">
            </iframe>
          </div>
        </div>

      </div>

      <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
        <p style={{ position: "relative", /* backgroundColor: ORANGE_COLOR , */ fontSize: 32, width: "fit-content", margin: "0 auto", marginBottom: 40,/*  border: "6px solid black", */ padding: "4px 40px", zIndex: 4 }}>
          KIRJUTA MEILE!
        </p>
        {/* <div style={{ position: "absolute", width: "100%", borderTop: "6px solid black", top: 30, zIndex: 1 }}></div> */}
        
        <div style={{ display: "flex", flexDirection: "row", width: "80%", maxWidth: 600,
            margin: "0 auto", marginBottom: 40, alignItems: "center", height: 200 }}>
          <div className="contact-icon" style={{ flex: 1 }}>
            <i class="fa-brands fa-instagram" style={{ fontSize: 60, padding: 20, borderRadius: "50%" }}></i>
            <p style={{ margin: 0, marginTop: -10 }}>@crymearivertattoo</p>
          </div>
          <div className="contact-icon" style={{ flex: 1 }}>
            <i class="fa-brands fa-facebook" style={{ fontSize: 60, padding: 20, borderRadius: "50%" }}></i>
            <p style={{ margin: 0, marginTop: -10 }}>@crymearivertattoo</p>
          </div>
          <div className="contact-icon" style={{ flex: 1 }}>
            <i class="fa-regular fa-envelope" style={{ fontSize: 60, padding: 20, borderRadius: "50%" }}></i>
            <p style={{ margin: 0, marginTop: -10 }}>@crymearivertattoo</p>
          </div>
        </div>

      </div>
      
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
