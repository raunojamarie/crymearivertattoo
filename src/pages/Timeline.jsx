import { useState } from "react";
import { GREEN_COLOR } from "../App";
import useWindowDimensions from "../useWindowDimensions";
import '../styles/timeline.css';
import { t } from "../components/translation/translation";

const Timeline = () => {
  const { height, width } = useWindowDimensions();
  const [day, setDay] = useState(1);

  const isMobile = width <= 600;
  const isTablet = width <= 768;
  const isBreakpoint = width <= 1100;
  const isBreakpoint2 = width <= 540;
  const navbarCollapse = width <= 990;

  const handleDayClick = (i) => {
    setDay(i);
  }

  return (
    <div className="black-bacgkround" style={{ paddingBottom: 80}}>
      <div style={{ position: "relative"}}>
        <p  className="big-title-green timeline-title">{t("timeline-title")}</p>
        <div className="align content-wrapper">
        <p className="text-white">
          {t("timeline-text")}
        </p>
      </div>
        <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: 10 }}>
          <button onClick={() => handleDayClick(1)} className={`timeline-btn ${day === 1 ? "timeline-btn-active" : ""}`}>
            <p style={{ }}>24.05</p>
            {day === 1 && <>
              <div style={{
                borderLeft: "6px solid " + GREEN_COLOR,
                height: 80,
                position: "absolute",
                left: 48,
                marginLeft: -3,
                top: 46,
              }}></div>
              <div style={{
                borderBottom: "6px solid " + GREEN_COLOR,
                width: 110,
                position: "absolute",
                left: 48,
                marginLeft: -3,
                top: 120,
              }}></div>
            </>}
          </button>
          <button onClick={() => handleDayClick(2)} className={`timeline-btn ${day === 2 ? "timeline-btn-active" : ""}`}>
            <p>25.05</p>
            {day === 2 && <>
              <div style={{
                borderLeft: "6px solid " + GREEN_COLOR,
                height: 80,
                position: "absolute",
                left: "50%",
                marginLeft: -3,
                top: 46,
              }}>
              </div>
            </>}
          </button>
          <button onClick={() => handleDayClick(3)} className={`timeline-btn ${day === 3 ? "timeline-btn-active" : ""}`}>
            <p>26.05</p>
            {day === 3 && <>
              <div style={{
                borderLeft: "6px solid " + GREEN_COLOR,
                height: 80,
                position: "absolute",
                left: 48,
                marginLeft: -3,
                top: 46,
              }}></div>
              <div style={{
                borderBottom: "6px solid " + GREEN_COLOR,
                width: 110,
                position: "absolute",
                right: 46,
                top: 120,
              }}></div>
            </>}
          </button>
        </div>

        <div style={{ position: "absolute", width: "100%", top: 30, zIndex: 1 }}></div>
      </div>
      <div style={{ position: "relative", width: navbarCollapse ? isMobile ? "95%" : "90%" : "60%", margin: "0 auto 0 auto", marginTop: 40, backgroundColor: GREEN_COLOR + "33", height: 500 }}>
        <div style={{
          borderLeft: "6px solid " + GREEN_COLOR,
          height: 300,
          position: "absolute",
          left: "50%",
          marginLeft: -3,
          top: 34,
        }}>
        </div>

        {day === 1 && <>
          <TimelineSlot width={width} left={false} top={60} time={"11:00"} title={t("timeline-slot-0")} text={""} />
          <TimelineSlot width={width} left={true} top={180} time={"20:00"} title={t("timeline-slot-1")} text={""} />
          <TimelineSlot width={width} left={false} top={300} time={"20:00"} title={t("timeline-slot-2")} text={""} />          
        </>}
        {day === 2 && <>
          <TimelineSlot width={width} left={false} top={60} time={"11:00"} title={t("timeline-slot-3")} text={""} />
          <TimelineSlot width={width} left={true} top={180} time={"20:00"} title={t("timeline-slot-4")} text={""} />
          <TimelineSlot width={width} left={false} top={300} time={"20:00"} title={t("timeline-slot-5")} text={""} />          
        </>}
        {day === 3 && <>
          <TimelineSlot width={width} left={false} top={60} time={"11:00"} title={t("timeline-slot-6")} text={""} />
          <TimelineSlot width={width} left={true} top={180} time={"13:00"} title={t("timeline-slot-7")} text={""} />
          <TimelineSlot width={width} left={false} top={300} time={"15:00"} title={t("timeline-slot-8")} text={""} />          
        </>}

      </div>
    </div>
  );
}


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
          backgroundColor: GREEN_COLOR,
          opacity: 1,
        }}>
        </div>
      </div>
      <div style={{
        zIndex: 1,
        borderTop: "6px solid " + GREEN_COLOR,
        position: "absolute",
        left: left ? "auto" : "50%",
        right: left ? "50%" : "auto",
        height: 200,
        top: top + 28,
        width: isMobile ? (width/5) + 10 : width/5
      }}>
        {/*<img src={left ? needleLeft : needleRight} style={{ position: "absolute", left: !left ? -7 : "auto", right: left ? -6 : "auto", top: -31, width: "calc(100% + 26px)", zIndex: 998 }} alt=""></img>*/}
        <div style={{
          height: 25,
          width: 25,
          position: "absolute",
          left: left ? -2 : "auto",
          right: left ? "auto" : -5,
          top: -15,
          borderRadius: "50%",
          backgroundColor: GREEN_COLOR,
        }}>
          <p className="color-white" style={{ margin: 0, marginLeft: left ? -85 : 32, marginTop: -10, fontSize: 28, fontWeight: 800, fontFamily: 'Kanit'  }}>{time}</p>
        </div>
        <div style={{
          overflow: "hidden",
          textAlign: left ? "left" : "right",
          position: "absolute",
          left: left ? -85 : "auto",
          right: left ? "auto" : -85,
          top: 20,
          width: isMobile ? "180%" : navbarCollapse ? "100%" : "90%",
          height: 110
        }}>
          <div style={{ backgroundColor: GREEN_COLOR }}>
            <p className="color-white timeline-box-title" style={{ margin: 0, fontSize: isMobile ? 20 : 24, padding: "6px 6px", fontFamily: "Kanit", fontWeight: 900 }}>{title}</p>
          </div>
          <div style={{ padding: 4 }}>
            <p className="color-white" style={{ margin: 0, fontSize: 18, fontFamily: "Kanit" }}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;