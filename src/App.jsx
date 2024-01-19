import './styles/App.css';
import './styles/responsive.css';
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
import Info from './pages/Info.jsx';
import Live from './pages/Live.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Haaletus from './pages/Haaletus.jsx';
import Tartu from './pages/Tartu.jsx';
import { useEffect } from 'react';
import Accordion from './components/accordion.jsx';

export const ORANGE_COLOR = "#ef880e";
export const GREEN_COLOR = "#7d922b";

const dripEnabled = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
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
    <div id="home" className="app-root" style={{ height: "100%", width: "100%" }}>
      <div className="navbar black-bacgkround" style={{
        position: "fixed",
        top: 0, right: 0, left: 0,
        height: 100,
        display: "flex",
        paddingLeft: 40,
        paddingRight: 40,
        zIndex: 999,
      }}>
        <div className="navbar-menu color-white" style={{
          display: "flex",
          width: "100%",
          fontSize: 28,
          fontWeight: 900,
          justifyContent: "center",
        }}>
          {navbarCollapse
            ? <div className="navbar-logo" style={{
              height: 100, display: "flex", color: ORANGE_COLOR, margin: 0,
            }}>
              <p style={{ fontSize: 24 }}>crymearivertattoo</p>
            </div>
            : <AnchorLink offset={90} className="nav-option navbar-logo" style={{ color: ORANGE_COLOR }} href='#home'>crymearivertattoo</AnchorLink>
          }
          <div className="navbar-menu-options" style={{ }}>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#info'>INFO JA PILETID</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#live'>LIVE</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#artistid'>ARTISTID</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#ajakava'>AJAKAVA</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#rahvahaaletus'>RAHVAHÄÄLETUS</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#tartu'>TARTU 2024</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#kontakt'>KONTAKT</AnchorLink>
            <p className="nav-option">ET</p>
          </div>
        </div>
      </div>

      <div className="main-header" style={{ position: "relative", height: "100vh" }}>
        {dripEnabled() && <img src={drip} alt="" style={{ position: "absolute", width: "100%", height: 268, bottom: -268, left: 0, zIndex: 1 }}></img>}
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
              width: "fit-content"
            }}>
              <p className='color-white' style={{ textAlign: "left", paddingLeft: 12, padding: 0, margin: 0, fontSize: 24, fontWeight: 800 }}>ALGUSENI ON JÄÄNUD</p>
              <FlipDate />
              <div style={{ display: "flex", height: 30, width: "100%", fontSize: 18, color: ORANGE_COLOR, textTransform: "lowercase", fontWeight: 800 }}>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>PÄEVA</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>TUNDI</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>MINUTIT</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>SEKUNDIT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div id="info">
        <Info />
      </div>
      <div id="live">
        <Live />
      </div>
      <div id="artistid">
        <Artists />
      </div>
      <div id="ajakava">
        <Timeline />
      </div>
      <div id="rahvahaaletus">
        <Haaletus />
      </div>
      <div id="tartu">
        <Tartu />
      </div>


      <div id="kontakt">
        <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
          <p className="big-title-orange contact-title">
            KONTAKT
          </p>

          <div style={{ position: "absolute", width: "100%", top: 30, zIndex: 1 }}></div>
          <div className="contact-wrapper" style={{
            display: "flex", flexDirection: isTablet ? "column" : "row",
            width: "80%", maxWidth: 1200, margin: "0 auto", marginBottom: 40, alignItems: "center"
          }}>
            <div style={{ width: "100%", flex: 1, height: "100%", paddingTop: "20px" }}>
              <p className='sub-title contact-sub-title'>
                <span>KUS</span>
                <span className="conctact-sub-title-space" style={{padding: "0 20px"}}>ME</span>
                <span>ASUME?</span>
              </p>
              <iframe
                width="100%"
                height={450}
                style={{ border: "none" }}
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCS0QexUfZnKgG0siTOuOwlVCFGmOSVfwI
                  &q=Harbour+Theatre,Tartu+Estonia">
              </iframe>
            </div>
          </div>
          <div style={{ display: "grid", placeContent: "center", width: "100%", padding: "0 0", textAlign: "center", position: "relative", paddingBottom: 40, marginTop: -30 }}>
              <div className="contact-icon" style={{ }}>
                <a href="mailto:tartu.alternativearts@gmail.com" className="contact-icon icon" target="blank">
                  <i class="fa-regular fa-envelope contact-icon-i" style={{ fontSize: 80, padding: 20, paddingTop: 0, borderRadius: "50%" }}></i>
                  <p className="contact-icon-text" style={{ margin: -10, opacity: 0.5 }}>tartu.alternativearts@gmail.com</p>
                </a>
              </div>
          </div>
        </div>
      </div>

      {/* <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
          <p className='sub-title'>
            KORDUMA KIPPUVAD KÜSIMUSED
          </p>
        </div>

        <div className="accordion" style={{ width: "100%", maxWidth: "720px", margin: "15px 0px 45px 0px " }}>
          <Accordion title="Lühike küsimus" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Accordion title="Üks hästi pikk küsimus mis tahab väga palju asju teada" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <Accordion title="Keskmise pikkusega küsimus" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
      </div> */}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
