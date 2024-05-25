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
  const isLargeScreen = width >= 1340;

  const handleDayClick = (i) => {
    setDay(i);
  }

  return (
    <div className="black-bacgkround" style={{ paddingBottom: 80 }}>
      <div style={{ position: "relative" }}>
        <p className="big-title-green timeline-title">{t("timeline-title")}</p>
        <div className="align content-wrapper">
          <p style={{ textAlign: "center" }} className="text-white">{t("timeline-text")}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: 10,
          }}
        >
          <button
            onClick={() => handleDayClick(1)}
            className={`timeline-btn ${day === 1 ? "timeline-btn-active" : ""}`}
          >
            <p style={{}}>24.05</p>
            {day === 1 && (
              <>
                <div
                  style={{
                    borderLeft: "6px solid " + GREEN_COLOR,
                    height: 80,
                    position: "absolute",
                    left: 48,
                    marginLeft: -3,
                    top: 46,
                  }}
                ></div>
                <div
                  style={{
                    borderBottom: "6px solid " + GREEN_COLOR,
                    width: 110,
                    position: "absolute",
                    left: 48,
                    marginLeft: -3,
                    top: 120,
                  }}
                ></div>
              </>
            )}
          </button>
          <button
            onClick={() => handleDayClick(2)}
            className={`timeline-btn ${day === 2 ? "timeline-btn-active" : ""}`}
          >
            <p>25.05</p>
            {day === 2 && (
              <>
                <div
                  style={{
                    borderLeft: "6px solid " + GREEN_COLOR,
                    height: 80,
                    position: "absolute",
                    left: "50%",
                    marginLeft: -3,
                    top: 46,
                  }}
                ></div>
              </>
            )}
          </button>
          <button
            onClick={() => handleDayClick(3)}
            className={`timeline-btn ${day === 3 ? "timeline-btn-active" : ""}`}
          >
            <p>26.05</p>
            {day === 3 && (
              <>
                <div
                  style={{
                    borderLeft: "6px solid " + GREEN_COLOR,
                    height: 80,
                    position: "absolute",
                    left: 48,
                    marginLeft: -3,
                    top: 46,
                  }}
                ></div>
                <div
                  style={{
                    borderBottom: "6px solid " + GREEN_COLOR,
                    width: 110,
                    position: "absolute",
                    right: 46,
                    top: 120,
                  }}
                ></div>
              </>
            )}
          </button>
        </div>

        <div
          style={{ position: "absolute", width: "100%", top: 30, zIndex: 1 }}
        ></div>
      </div>
      <div
        style={{
          position: "relative",
          width: navbarCollapse
            ? isMobile
              ? "95%"
              : "90%"
            : isLargeScreen
            ? "60%"
            : "90%",
          margin: "0 auto 0 auto",
          marginTop: 40,
          backgroundColor: GREEN_COLOR + "33",
          height: day === 2 ? 1420 : day === 3 ? 600 : 860,
        }}
      >
        <div
          style={{
            borderLeft: "6px solid " + GREEN_COLOR,
            position: "absolute",
            left: "50%",
            marginLeft: -3,
            top: 34,
            bottom: day === 3 ? 360 : 200,
          }}
        ></div>

        {day === 1 && (
          <>
            <TimelineSlot
              larger
              width={width}
              left={false}
              top={60}
              time={"11:00"}
              title={t("timeline-slot-0")}
              text={t("timeline-slot-0-text")}
            />
            <TimelineSlot
              larger
              width={width}
              left={true}
              top={200}
              time={"13:00"}
              title={t("timeline-slot-1")}
              text={t("timeline-slot-1-text")}
            />
            <TimelineSlot
              larger
              width={width}
              left={false}
              top={340}
              time={"15:00"}
              title={t("timeline-slot-2")}
              text={t("timeline-slot-2-text")}
            />
            <TimelineSlot
              larger
              width={width}
              left={true}
              top={480}
              time={"17:00"}
              title={t("timeline-slot-3")}
              text={t("timeline-slot-3-text")}
            />
            <TimelineSlot
              larger
              isWide
              width={width}
              left={false}
              top={620}
              time={"20:00"}
              title={t("timeline-slot-4")}
              text={t("timeline-slot-4-text")}
            />
          </>
        )}
        {day === 2 && (
          <>
            <TimelineSlot
              width={width}
              left={false}
              top={60}
              time={"11:00"}
              title={t("timeline-slot-5")}
              text={t("timeline-slot-5-text")}
            />
            <TimelineSlot
              width={width}
              left={true}
              top={200}
              time={"13:00"}
              title={t("timeline-slot-6")}
              text={t("timeline-slot-6-text")}
            />
            <TimelineSlot
              width={width}
              left={false}
              top={340}
              time={"13:00"}
              title={t("timeline-slot-7")}
              text={t("timeline-slot-7-text")}
            />
            <TimelineSlot
              width={width}
              left={true}
              top={480}
              time={"14:00"}
              title={t("timeline-slot-88")}
              text={t("timeline-slot-88-text")}
            />
            <TimelineSlot
              width={width}
              left={false}
              top={620}
              time={"15:30"}
              title={t("timeline-slot-8")}
              text={t("timeline-slot-8-text")}
            />
            <TimelineSlot
              width={width}
              left={true}
              top={760}
              time={"18:00"}
              title={t("timeline-slot-9")}
              text={t("timeline-slot-9-text")}
            />
            <TimelineSlot
              width={width}
              left={false}
              top={900}
              time={"18:30"}
              title={t("timeline-slot-88")}
              text={t("timeline-slot-88-text")}
            />
            <TimelineSlot
              width={width}
              left={true}
              top={1040}
              time={"19:00"}
              title={t("timeline-slot-10")}
              text={t("timeline-slot-10-text")}
            />
            <TimelineSlot
              isWide
              width={width}
              left={false}
              top={1180}
              time={"20:00"}
              title={t("timeline-slot-11")}
              text={t("timeline-slot-11-text")}
            />
          </>
        )}
        {day === 3 && (
          <>
            <TimelineSlot
              width={width}
              left={false}
              top={60}
              time={"11:30"}
              title={t("timeline-slot-12")}
              text={t("timeline-slot-12-text")}
            />
            <TimelineSlot
              width={width}
              left={true}
              top={200}
              time={"14:00"}
              title={t("timeline-slot-13")}
              text={t("timeline-slot-13-text")}
            />
          </>
        )}
      </div>
    </div>
  );
}


export const TimelineSlot = ({ width, left, top, title, text, time, larger, isWide }) => {
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
        left: left ? navbarCollapse ? 100 : 145 : "50%",
        right: left ? "50%" : navbarCollapse ? 100 : 145,
        height: 200,
        top: top + 28,
      }}>
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
          <p className="color-white" style={{ margin: 0, marginLeft: left ? -85 : isWide ? 30 : 38, marginTop: -10, fontSize: 28, fontWeight: 800, fontFamily: 'Kanit' }}>{time}</p>
        </div>
        <div style={left ? {
          overflow: "hidden",
          textAlign: "left",
          position: "absolute",
          left: -85,
          right: isMobile ? 20 : 40,
          top: 20,
          height: 310,
          overflowY: "auto"
        } :
        {
          overflow: "hidden",
          textAlign: "right",
          position: "absolute",
          left: isMobile ? 20 : 40,
          right: -85,
          top: 20,
          height: 310,
          overflowY: "auto"
        }}>
          <div style={{ backgroundColor: GREEN_COLOR }}>
            <p className="color-white timeline-box-title" style={{ margin: 0, fontSize: isMobile ? 20 : 24, padding: "6px 6px", fontFamily: 'Kanit', fontWeight: 700 }}>{title}</p>
          </div>
          <div style={{ padding: 4 }}>
            <div className="color-white" style={{ margin: 0, fontSize: 18, fontFamily: 'Kanit'  }}>{text}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;