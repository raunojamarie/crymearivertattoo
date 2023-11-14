import './App.css';
import headerText from "./assets/header.png";
import tattooFest from "./assets/tattoofest.png";
import barbwire from "./assets/barbwire.png";
import kett from "./assets/kett.png";
import loss from "./assets/loss.png"
import needleLeft from "./assets/needle_left.png";
import needleRight from "./assets/needle_right.png";
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
            <p>RAHVAHÄÄLETUS</p>
            <p>TARTU 2024</p>
            <p>KONTAKT</p>
            <p>ET</p>
          </div>
        </div>
      </div>
      <div className="main-header" style={{ height: "100vh", overflow: "hidden" }}>
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
          <div className="" style={{ position: "relative", flex: 1, display: "grid", justifyContent: "center", alignContent: isMobile ? "" : "center", zIndex: 3 }}>
            <img src={loss} style={{ width: "calc(100%)", opacity: 0.5 }}></img>
            <div className="counter-wrapper" style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                top: "50%",
                left: 0,
                right: 0,
                textAlign: "center",
                width: "fit-content" }}>
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
        <img src={kett} style={{ position: "absolute", left: 0, bottom: -20, width: "100%", zIndex: 998 }} alt=""></img>
      </div>


      
      <div style={{ width: "100%", padding: "50px 0", textAlign: "center", position: "relative" }}>
        {/* <div style={{ position: "absolute", top: 0, left: "50%", marginLeft: -3, height: 50, borderRight: "6px solid black" }}></div> */}
        <p style={{ fontSize: 32, width: "fit-content", margin: "0 auto", border: "6px solid black", padding: "4px 40px", backgroundColor: ORANGE_COLOR }}>AJAKAVA</p>
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

      <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
        <p style={{ position: "relative", backgroundColor: ORANGE_COLOR, fontSize: 32, width: "fit-content", margin: "0 auto", marginBottom: 40, border: "6px solid black", padding: "4px 40px", zIndex: 4 }}>ARTISTID</p>
        <div style={{ position: "absolute", width: "100%", borderTop: "6px solid black", top: 30, zIndex: 1 }}></div>
        <div style={{ position: "relative", width: navbarCollapse ? isMobile ? "95%" : "90%" : width - 400, maxWidth: 1100, margin: "0 auto 40px auto" }}>
          <div style={{ display: "flex", height: 350, padding: !isMobile && "0 80px" }}>
            <div style={{ flex: 1, marginRight: isMobile ? 20 : 40, display: "grid", justifyContent: isMobile ? "stretch" : "end", alignContent: "center" }}>
              <div style={{ border: "6px solid black", height: 300, width: isMobile ? "auto" : width/5, backgroundColor: ORANGE_COLOR + "33" }}>
              </div>
            </div>
            <div style={{ flex: 1, textAlign: "left", height: "auto", overflow: "hidden", margin: "40px 0 60px 0" }}>
              <p style={{ fontSize: isMobile ? 24 : 34, margin: 0 }}>Artisti Nimi</p>
              <p style={{ fontSize: isMobile ? 14 : 16, fontFamily: "arial" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Cras commodo, nunc vel condimentum facilisis, nisi dui placerat mi, sit amet tempor felis neque a dui. Proin id ultrices massa, facilisis gravida eros. Nulla at luctus neque. Nunc maximus sollicitudin volutpat. Cras fringilla nunc sit amet risus semper, in suscipit elit interdum. Quisque cursus dolor vitae mattis volutpat.
            </p>
            </div>

          </div>

          <div style={{ display: "flex", height: 350, padding: !isMobile && "0 80px" }}>
            <div style={{ flex: 1, textAlign: "right", height: "auto", overflow: "hidden", margin: "40px 0 60px 0" }}>
              <p style={{ fontSize: isMobile ? 24 : 34, margin: 0 }}>Artisti Nimi</p>
              <p style={{ fontSize: isMobile ? 14 : 16, fontFamily: "arial" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Cras commodo, nunc vel condimentum facilisis, nisi dui placerat mi, sit amet tempor felis neque a dui. Proin id ultrices massa, facilisis gravida eros. Nulla at luctus neque. Nunc maximus sollicitudin volutpat. Cras fringilla nunc sit amet risus semper, in suscipit elit interdum. Quisque cursus dolor vitae mattis volutpat.
            </p>
            </div>
            <div style={{ flex: 1, marginLeft: isMobile ? 20 : 40, display: "grid", justifyContent: isMobile ? "stretch" : "start", alignContent: "center" }}>
              <div style={{ border: "6px solid black", height: 300, width: isMobile ? "auto" : width/5, backgroundColor: ORANGE_COLOR + "33" }}>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
        <p style={{ position: "relative", backgroundColor: ORANGE_COLOR, fontSize: 32, width: "fit-content", margin: "0 auto", marginBottom: 40, border: "6px solid black", padding: "4px 40px", zIndex: 4 }}>KONTAKT</p>
        <div style={{ position: "absolute", width: "100%", borderTop: "6px solid black", top: 30, zIndex: 1 }}></div>
        <div style={{ display: "flex", flexDirection: isTablet ? "column" : "row",
              width: "80%", maxWidth: 1200, margin: "0 auto", marginBottom: 40, alignItems: "center" }}>
          <div style={{ flex: 1, height: "100%" }}>
            <form style={{ width: 300, margin: "auto", textAlign: isTablet ? "center" : "left" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <br />
            
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <br />
            
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label for="message">Message:</label>
                <textarea  style={{ height: 100 }} id="message" name="message" required></textarea>
              </div>
              <br />
            
              <input type="submit" value="Send" />
            </form>
          </div>
          <div style={{ flex: 1, height: "100%" }}>
            <iframe
              width="100%"
              height={350}
              style={{border: "6px solid " + ORANGE_COLOR}}
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCS0QexUfZnKgG0siTOuOwlVCFGmOSVfwI
                &q=Harbour+Theatre,Tartu+Estonia">
            </iframe>
          </div>
        </div>

      </div>
      
      {/* FOOTER */}
      <div style={{ width: "100%", height: 300, backgroundColor: "black", color: "white", display: "grid", justifyContent: "center", alignContent: "center" }}>
          <p style={{ fontSize: 36, color: ORANGE_COLOR }}>crymearivertattoo</p>
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

        border: "6px solid rgb(0,0,0,0)",
      }}>
        <div className="timeline-inner-circle" style={{
          height: "50%",
          width: "50%",
          position: "absolute",
          left: "50%",
          top: "50%",
          margin: "-25% 0 0 -25%",
          borderRadius: "50%",
          backgroundColor: "rgb(0,0,0,0)", //ORANGE_COLOR
          opacity: 1,
        }}>
        </div>
      </div>
      <div style={{
        zIndex: 1,
        borderTop: "6px solid " + "rgb(0,0,0,0)", //ORANGE_COLOR
        position: "absolute",
        left: left ? "auto" : "50%",
        right: left ? "50%" : "auto",
        height: 200,
        top: top + 27,
        width: isMobile ? (width/5) + 10 : width/5
      }}>
        <img src={left ? needleLeft : needleRight} style={{ position: "absolute", left: !left ? -26 : "auto", right: left ? -26 : "auto", top: -31, width: "calc(100% + 26px)", zIndex: 998 }} alt=""></img>
        <div style={{
          height: 25,
          width: 25,
          position: "absolute",
          left: left ? -5 : "auto",
          right: left ? "auto" : -5,
          top: -15,
          borderRadius: "50%",
          backgroundColor: "rgb(0,0,0,0)"//ORANGE_COLOR,
        }}>
          <p style={{ margin: 0, marginLeft: left ? -105 : 35, marginTop: -10, fontSize: 28 }}>{time}</p>
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