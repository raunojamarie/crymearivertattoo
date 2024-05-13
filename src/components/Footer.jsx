import React from "react";
import logo1 from "../assets/sponsors/kivi.png"
import logo2 from "../assets/sponsors/bigmishka.png"
import logo3 from "../assets/sponsors/cheyenne.png"
import logo4 from "../assets/sponsors/cramo.png"
import logo5 from "../assets/sponsors/ideal.png"
import logo6 from "../assets/sponsors/kulka.png"
import logo7 from "../assets/sponsors/musterprint.png"
import logo8 from "../assets/sponsors/natty.png"
import logo9 from "../assets/sponsors/zewa.png"
import logo10 from "../assets/sponsors/andersons.png"
import logo11 from "../assets/sponsors/kuuesplaneet.png"
import logo12 from "../assets/sponsors/magic-butter.png"
import logo13 from "../assets/sponsors/nordic.png"
import useWindowDimensions from "../useWindowDimensions";
import { t } from "../components/translation/translation";
import "../styles/sponsors.css"

const Footer = () => {
  const { height, width } = useWindowDimensions();

  const isMobile = width <= 850;

  return (
    <>
      <div className="color-white black-bacgkround" style={{ width: "100%", display: "grid", justifyContent: "center", alignContent: "center" }}>
        <p className="big-title-green timeline-title">{t("sponsors")}</p>
        <div className="sponsors">
          <div className="sponsors-col"><img style={{ width: 100 }} alt="" src={logo11}></img></div>
          <div className="sponsors-col"><img style={{ width: 160 }} alt="" src={logo12}></img></div>
          <div className="sponsors-col"><img style={{ width: 400 }} alt="" src={logo13}></img></div>
          {!isMobile && 
            <div className="sponsors-col"><img style={{ width: 200 }} alt="" src={logo5}></img></div>
          }
        </div>
        <div className="sponsors">
          <div className="sponsors-col"><img style={{ width: 200 }} alt="" src={logo1}></img></div>
          {!isMobile && 
            <div className="sponsors-col"><img style={{ width: 200 }} alt="" src={logo7}></img></div>
          }
          <div className="sponsors-col"><img className="bigmishka" alt="" src={logo2}></img></div>
          {!isMobile && 
            <div className="sponsors-col"><img style={{ width: 200 }} alt="" src={logo6}></img></div>
          }
          <div className="sponsors-col"><img style={{ width: 200 }} alt="" src={logo8}></img></div>
        </div>
        <div className="sponsors">
          <div className="sponsors-col"><img style={{ width: 100 }} alt="" src={logo10}></img></div>
          <div className="sponsors-col"><img style={{ width: 100 }} alt="" src={logo9}></img></div>
          <div className="sponsors-col"><img style={{ width: 200 }} alt="" src={logo4}></img></div>
          <div className="sponsors-col"><img className="cheyenne" style={{ width: 200 }} alt="" src={logo3}></img></div>
        </div>
        {isMobile &&
          <div className="sponsors">
            <div className="sponsors-col"><img style={{ width: 200 }} alt="" src={logo7}></img></div>
            <div className="sponsors-col"><img style={{ width: 200 }} alt="" src={logo6}></img></div>
            <div className="sponsors-col"><img style={{ width: 200 }} alt="" src={logo5}></img></div>
          </div>
        }
        <div>
          <p className="color-white" style={{ fontSize: 14, fontFamily: 'Rubik Mono One', textAlign: "center", paddingTop: 20 }}> &copy; Tartu Alternative Arts MTÜ </p>
        </div>
      </div>
    </>
  )
}

export default Footer;
