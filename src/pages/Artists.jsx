import { ORANGE_COLOR } from "../App";
import stock1 from "../assets/stock-photo-1.jpg"
import stock2 from "../assets/stock-photo-2.jpg"
import useWindowDimensions from "../useWindowDimensions";
import './artists.css';

const Artists = () => {
  const { height, width } = useWindowDimensions();

  const isMobile = width <= 600;
  const isTablet = width <= 768;
  const isBreakpoint = width <= 1100;
  const isBreakpoint2 = width <= 540;
  const navbarCollapse = width <= 990;
  return (
    <div style={{ width: "100%", padding: "40px 0", textAlign: "center", position: "relative" }}>
        <p style={{ position: "relative", backgroundColor: ORANGE_COLOR, fontSize: 32, width: "fit-content", margin: "0 auto", marginBottom: 40, border: "6px solid black", padding: "4px 40px", zIndex: 4 }}>ARTISTID</p>
        <div style={{ position: "relative", width: navbarCollapse ? isMobile ? "95%" : "90%" : width - 400, maxWidth: 1100, margin: "0 auto 40px auto" }}>
          <div style={{ display: "flex", height: 350, padding: !isMobile && "0 80px" }}>
            <div style={{ flex: 1, marginRight: isMobile ? 20 : 40, display: "grid", justifyContent: "center", alignContent: "center" }}>
              <div className="circular">
                <img className="" alt="" src={stock1} ></img>
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
            <div style={{ flex: 1, marginLeft: isMobile ? 20 : 40, display: "grid", justifyContent: "center", alignContent: "center" }}>
              <div className="circular">
                <img className="" alt="" src={stock2} ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Artists;