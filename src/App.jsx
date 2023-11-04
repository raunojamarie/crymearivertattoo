import './App.css';
import headerText from "./assets/header.png";
import tattooFest from "./assets/tattoofest.png";
import { FlipDate } from './FlipDate';
import useWindowDimensions from './useWindowDimensions.jsx';

export const ORANGE_COLOR = "#fb8300";

const App = () => {
  const { height, width } = useWindowDimensions();

  const isMobile = width <= 600;
  const isTablet = width <= 768;
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
          flexDirection: isMobile ? "column" : "row",
          height: "calc(100% - 100px)",
          margin: "0 auto",
          marginTop: 100,
          width: isBreakpoint ? width - 20 : width - 200
        }}>
          <div style={{ flex: 1, display: "grid", justifyContent: "center", alignContent: "center", zIndex: 3 }}>
            <div style={{ width: "100%" }}>
              <img style={{ width: "100%" }} src={headerText}></img>
              <img style={{ marginTop: isMobile ? -40 : -60, width: "100%" }} src={tattooFest}></img>
            </div>
          </div>
          <div style={{ flex: 1, display: "grid", justifyContent: "center", alignContent: isMobile ? "" : "center", zIndex: 3 }}>
            <div className="counter-wrapper" style={{ width: "fit-content" }}>
              <p style={{ paddingLeft: 12, color: "white", padding: 0, margin: 0, fontSize: 20 }}>ALGAB JUBA</p>
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
      
      <div style={{ width: "100%", padding: "40px 0", textAlign: "center" }}>
        <p style={{ fontSize: 32, width: "fit-content", margin: "0 auto", border: "6px solid black", padding: "4px 40px", backgroundColor: ORANGE_COLOR + "33" }}>AJAKAVA</p>
        <div style={{ position: "relative", width: navbarCollapse ? isMobile ? "100%" : "90%" : width - 400, margin: "0 auto 0 auto", backgroundColor: ORANGE_COLOR + "33", height: 980 }}>
          <div style={{
            borderLeft: "6px solid black",
            height: "80%",
            position: "absolute",
            left: "50%",
            marginLeft: -3,
            top: 0
          }}>
          </div>

          <TimelineSlot width={width} left={false} top={60} time={"12:00"} title={"ürituse avapauk"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris massa, condimentum at consectetur ac, fermentum a libero."} />
          <TimelineSlot width={width} left={true} top={180} time={"13:00"} title={"mingi asi"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris massa, condimentum at consectetur ac, fermentum a libero."} />
          <TimelineSlot width={width} left={false} top={300} time={"14:00"} title={"tätoveerimine"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris massa, condimentum at consectetur ac, fermentum a libero."} />
          <TimelineSlot width={width} left={true} top={420} time={"15:30"} title={"mingi neljas asi"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris massa, condimentum at consectetur ac, fermentum a libero."} />
          <TimelineSlot width={width} left={false} top={540} time={"17:45"} title={"mingi muu asi"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris massa, condimentum at consectetur ac, fermentum a libero."} />
          <TimelineSlot width={width} left={true} top={660} time={"19:30"} title={"pidu"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris massa, condimentum at consectetur ac, fermentum a libero."} />
          <TimelineSlot width={width} left={false} top={780} time={"23:30"} title={"afterparty"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mauris massa, condimentum at consectetur ac, fermentum a libero."} />
        </div>
      </div>
    </div>
  );
}

export default App;

export const TimelineSlot = ({ width, left, top, title, text, time }) => {
  const isMobile = width <= 600;
  const navbarCollapse = width <= 990;
  return (
    <div>
      <div className="timeline-outer-circle" style={{
        zIndex: 3,
        height: 50,
        width: 50,
        position: "absolute",
        left: "50%",
        top: top,
        marginLeft: -31,
        borderRadius: "50%",
        backgroundColor: "white",
        border: "6px solid black",
      }}>
        <div className="timeline-inner-circle" style={{
          height: "50%",
          width: "50%",
          position: "absolute",
          left: "50%",
          top: "50%",
          margin: "-25% 0 0 -25%",
          borderRadius: "50%",
          backgroundColor: ORANGE_COLOR,
        }}>
        </div>
      </div>
      <div style={{
        zIndex: 1,
        borderTop: "6px solid " + ORANGE_COLOR,
        position: "absolute",
        left: left ? "auto" : "50%",
        right: left ? "50%" : "auto",
        height: 200,
        top: top + 27,
        width: isMobile ? (width/5) + 10 : width/5
      }}>
        <div style={{
          height: 25,
          width: 25,
          position: "absolute",
          left: left ? 0 : "auto",
          right: left ? "auto" : 0,
          top: -14,
          borderRadius: "50%",
          backgroundColor: ORANGE_COLOR,
        }}>
          <p style={{ margin: 0, marginLeft: left ? -110 : 40, marginTop: -10, fontSize: 28 }}>{time}</p>
        </div>
        <div style={{
          overflow: "hidden",
          textAlign: left ? "left" : "right",
          position: "absolute",
          left: left ? -75 : "auto",
          right: left ? "auto" : -75,
          top: 20,
          width: isMobile ? "150%" : navbarCollapse ? "100%" : "70%",
          height: 110
        }}>
          <div style={{ backgroundColor: ORANGE_COLOR }}>
            <p style={{ margin: 0, fontSize: isMobile ? 16 : 18, padding: "6px 6px" }}>{title}</p>
          </div>
          <div style={{ padding: 4 }}>
            <p style={{ margin: 0, fontSize: 12, fontFamily: "arial" }}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}