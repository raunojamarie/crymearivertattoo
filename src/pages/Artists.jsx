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
    <div style={{ padding: "0px 0" }}>
      <p className="big-title-orange">artistid</p>
      <div className="artists-content" style={{ width: navbarCollapse ? isMobile ? "95%" : "90%" : width - 400 }}>
        <div className="artist-content">
          <div className="artist-content-img">
            <div className="circular">
              <img className="artist-img" alt="" src={stock1}></img>
            </div>
          </div>
          <div className="artist-content-text">
            <p className="artists-sub-title" style={{ fontSize: isMobile ? 24 : 24}}>Rauno Paluvee</p>
            <p className="text-black" style={{ fontSize: isMobile ? 14 : 18 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Cras commodo, nunc vel condimentum facilisis, nisi dui placerat mi, sit amet tempor felis neque a dui. Proin id ultrices massa, facilisis gravida eros. Nulla at luctus neque. Nunc maximus sollicitudin volutpat. Cras fringilla nunc sit amet risus semper, in suscipit elit interdum. Quisque cursus dolor vitae mattis volutpat.
            </p>
          </div>
        </div>

        <div className="artist-content">
          <div className="artist-content-text" style={{ textAlign: "right" }}>
            <p className="artists-sub-title" style={{ fontSize: isMobile ? 24 : 24}}>Marie Vabamägi</p>
            <p className="text-black" style={{ fontSize: isMobile ? 14 : 18 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque justo enim, consectetur vel dapibus eget, ullamcorper et mi. Cras commodo, nunc vel condimentum facilisis, nisi dui placerat mi, sit amet tempor felis neque a dui. Proin id ultrices massa, facilisis gravida eros. Nulla at luctus neque. Nunc maximus sollicitudin volutpat. Cras fringilla nunc sit amet risus semper, in suscipit elit interdum. Quisque cursus dolor vitae mattis volutpat.
            </p>
          </div>
          <div className="artist-content-img">
            <div className="circular">
              <img className="artist-img" alt="" src={stock2}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artists;