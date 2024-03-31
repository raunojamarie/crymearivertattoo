import './styles/App.css';
import './styles/responsive.css';
import headerText from "./assets/logo.png";
import nimi from "./assets/nimi.png";
import loss from "./assets/loss.png"
import drip from "./assets/drip.png";
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
import { useEffect, useRef, useState,  } from 'react';
import { motion } from "framer-motion";
import { t } from './components/translation/translation';
import { useNavigate } from 'react-router-dom';

export const ORANGE_COLOR = "#ef880e";
export const GREEN_COLOR = "#7d922b";

const dripEnabled = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.toString().includes("drip");
}

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        event.stopPropagation();
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};

const App = () => {
  const { height, width } = useWindowDimensions();

  const isMobile = width <= 600;
  const isTablet = width <= 768;
  const isBreakpoint = width <= 1100;
  const isBreakpoint2 = width <= 540;
  const navbarCollapse = width <= 990;

  const [burgerOpen, setBurgerOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOutside = () => {
    setBurgerOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const handleLanguageChange = () => {
    if (window.location.href.includes('/en')) {
      navigate("/")
    } else {
      navigate("/en")
    }  
  }

  const renderLanguageText = () => {
    if (window.location.href.includes('/en')) {
      return "ET";
    } else {
      return "EN";
    }  
  }

  return (
    <div id="home" className="app-root" style={{ height: "100%", width: "100%" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: isMobile ? 70 : 90, backgroundColor: "black" }}>
      </div>
      {burgerOpen &&
          <motion.nav
          initial={false}
          animate={burgerOpen ? "open" : "closed"}
          custom={200}
        >
          <motion.div className="background" variants={sidebar} />
          <div ref={ref} className="burger-menu" style={{ display: "flex", flexDirection: "column", position: "fixed", paddingLeft: 20, fontSize: 20, justifyContent: "center", top: 70, left: 0, right: 0, backgroundColor: "black", zIndex: 999, borderBottom: "4px solid " + GREEN_COLOR, borderTop: "none", opacity: 0.95 }}>
            <AnchorLink onClick={() => setBurgerOpen(!burgerOpen)} offset={70} className="burger-option" style={{}} href='#info'>{t("info")}</AnchorLink>
            <AnchorLink onClick={() => setBurgerOpen(!burgerOpen)} offset={70} className="burger-option" style={{}} href='#live'>{t("live")}</AnchorLink>
            <AnchorLink onClick={() => setBurgerOpen(!burgerOpen)} offset={70} className="burger-option" style={{}} href='#artistid'>{t("artistid")}</AnchorLink>
            <AnchorLink onClick={() => setBurgerOpen(!burgerOpen)} offset={70} className="burger-option" style={{}} href='#ajakava'>{t("ajakava")}</AnchorLink>
            <AnchorLink onClick={() => setBurgerOpen(!burgerOpen)} offset={70} className="burger-option" style={{}} href='#rahvahaaletus'>{t("rahvahaaletus")}</AnchorLink>
            <AnchorLink onClick={() => setBurgerOpen(!burgerOpen)} offset={70} className="burger-option" style={{}} href='#tartu'>{t("tartu")}</AnchorLink>
            <AnchorLink onClick={() => setBurgerOpen(!burgerOpen)} offset={70} className="burger-option" style={{}} href='#kontakt'>{t("kontakt")}</AnchorLink>
            <div onClick={handleLanguageChange} offset={70} className="burger-option" style={{ paddingBottom: 30 }} href='#info'>{renderLanguageText()}</div>
          </div>
        </motion.nav>
      }
      <div className="navbar black-bacgkround" style={{
        position: "fixed",
        top: 0, right: 0, left: 0,
        height: isMobile ? 66 : 90,
        display: "flex",
        borderBottom: isMobile ? !burgerOpen ? "4px solid #7d922b" : "4px solid black" : "none",
        zIndex: 999,
        placeContent: "center",
        opacity: 0.95
      }}>
        <div className="navbar-menu color-white" style={{
          display: "flex",
          width: "100%",
          fontSize: 28,
          fontWeight: 900,
          justifyContent: "center",
        }}>
          {navbarCollapse
            ? <div className="navbar-logo nav-logo-mobile" style={{
              height: "100%", display: "flex", gap: 40, color: ORANGE_COLOR, margin: 0, width: "100%"
            }}>
              <AnchorLink offset={90} className="nav-option navbar-logo" style={{ color: ORANGE_COLOR }} href='#home'>
                <div style={{ paddingLeft: 0, height: "100%", display: "grid", placeContent: "center" }}>
                  <img style={{ height: 40, margin: "0 auto" }} src={nimi}></img>
                </div>
              </AnchorLink>
              <div style={{ display: "grid", justifyContent: "end", alignItems: "center", paddingRight: 10, height: "100%", width: "100%" }}>
                <button onClick={() => setBurgerOpen(!burgerOpen)} style={{ display: "grid", placeContent: "center", outline: "none", height: 50, width: 50, borderRadius: "50%", border: "none", backgroundColor: "black" }}>
                  {burgerOpen
                    ? <i style={{ color: "#7d922b", fontSize: 34}} class="fa-solid fa-close"></i>
                    : <i style={{ color: "#7d922b", fontSize: 34}} class="fa-solid fa-bars"></i>
                  }
                </button>
              </div>
            </div>
            : <AnchorLink offset={90} className="nav-option navbar-logo" style={{ color: ORANGE_COLOR }} href='#home'>
                <div style={{ paddingLeft: 0, height: "100%", display: "grid", placeContent: "center" }}>
                  <img style={{ height: 60, margin: "0 auto" }} src={nimi}></img>
                </div>
              </AnchorLink>
          }
          <div className="navbar-menu-options" style={{ paddingRight: 10 }}>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#info'>{t("info")}</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#live'>{t("live")}</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#artistid'>{t("artistid")}</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#ajakava'>{t("ajakava")}</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#rahvahaaletus'>{t("rahvahaaletus")}</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#tartu'>{t("tartu")}</AnchorLink>
            <AnchorLink offset={90} className="nav-option" style={{}} href='#kontakt'>{t("kontakt")}</AnchorLink>
            <p className="nav-option" onClick={handleLanguageChange}>{renderLanguageText()}</p>
          </div>
        </div>
      </div>

      <div className="main-header" style={{ height: isMobile ? "100%" : "100vh", paddingBottom: isMobile ? 40 : 0 }}>
        {dripEnabled() && <img src={drip} alt="" style={{ position: "absolute", width: "100%", height: 268, bottom: -268, left: 0, zIndex: 1 }}></img>}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          height: isMobile ? "calc(100% - 70px)" : "calc(100% - 90px)",
          margin: "0 auto",
          marginTop: isMobile ? 70 : 90,
          width: isBreakpoint ? width - 20 : width - 200
        }}>
          <div style={{ flex: 1, display: "grid", justifyContent: "center", alignContent: "center", zIndex: 3 }}>
            <div style={{ width: "100%", display: "grid", placeContent: "center", paddingTop: 20 }}>
              <img style={{ width: "90%", margin: "0 auto" }} src={headerText}></img>
            </div>
          </div>
          <div className="" style={{ position: "relative", flex: 1, display: "grid", justifyContent: "center", alignContent: isMobile ? "" : "center", zIndex: 3 }}>
            <img src={loss} style={{ width: "100%", margin: "0 auto", paddingTop: isMobile ? 60 : 0, opacity: 0.5, marginTop: -40 }}></img>
            <div style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              top: 30,
              left: 0,
              right: 0,
              display: "grid",
              placeContent: "center"
            }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", display: "grid", placeContent: "center" }}>
                <i style={{ fontSize: 40, color: "white", opacity: 0 }}class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
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
              <p className='color-white' style={{ textAlign: "left", paddingLeft: 12, padding: 0, margin: 0, fontSize: 24, fontWeight: 800 }}>{t('countdown')}</p>
              <FlipDate />
              <div style={{ display: "flex", height: 30, width: "100%", fontSize: 18, color: ORANGE_COLOR, textTransform: "lowercase", fontWeight: 800 }}>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>{t('days')}</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>{t('hours')}</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>{t('minutes')}</p>
                </div>
                <div style={{ flex: 1, margin: 4, display: "grid", alignContent: "center", justifyContent: "center" }}>
                  <p style={{ margin: 0 }}>{t('seconds')}</p>
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
            {t("contact-title")}
          </p>

          <div style={{ position: "absolute", width: "100%", top: 30, zIndex: 1 }}></div>
          <div className="contact-wrapper" style={{
            display: "flex", flexDirection: isTablet ? "column" : "row",
            width: "80%", maxWidth: 1200, margin: "0 auto", marginBottom: 40, alignItems: "center"
          }}>
            <div style={{ width: "100%", flex: 1, height: "100%", paddingTop: "20px" }}>
              <p className='sub-title contact-sub-title'>
                <span>{t("contact-sub-title-0")}</span>
                <span className="conctact-sub-title-space" style={{padding: "0 20px"}}>{t("contact-sub-title-1")}</span>
                <span>{t("contact-sub-title-2")}</span>
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
