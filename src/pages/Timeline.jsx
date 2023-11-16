import { ORANGE_COLOR } from "../App";
import useWindowDimensions from "../useWindowDimensions";

const Timeline = () => {
  const { height, width } = useWindowDimensions();

  const isMobile = width <= 600;
  const isTablet = width <= 768;
  const isBreakpoint = width <= 1100;
  const isBreakpoint2 = width <= 540;
  const navbarCollapse = width <= 990;

  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{ position: "relative"}}>
        <p style={{ position: "relative", backgroundColor: ORANGE_COLOR, fontSize: 32, width: "fit-content", margin: "0 auto", marginBottom: 40, border: "6px solid black", padding: "4px 40px", zIndex: 4 }}>AJAKAVA</p>
        <div style={{ position: "absolute", width: "100%", borderTop: "6px solid black", top: 30, zIndex: 1 }}></div>
      </div>
      <div style={{ position: "relative", width: navbarCollapse ? isMobile ? "100%" : "90%" : width - 400, margin: "0 auto 0 auto", backgroundColor: ORANGE_COLOR + "33", height: 980 }}>
        <div style={{
          borderLeft: "6px solid " + ORANGE_COLOR,
          height: "88%",
          position: "absolute",
          left: "50%",
          marginLeft: -3,
          top: -40,
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
          backgroundColor: ORANGE_COLOR,
          opacity: 1,
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
        top: top + 28,
        width: isMobile ? (width/5) + 10 : width/5
      }}>
        {/*<img src={left ? needleLeft : needleRight} style={{ position: "absolute", left: !left ? -7 : "auto", right: left ? -6 : "auto", top: -31, width: "calc(100% + 26px)", zIndex: 998 }} alt=""></img>*/}
        <div style={{
          height: 25,
          width: 25,
          position: "absolute",
          left: left ? -5 : "auto",
          right: left ? "auto" : -5,
          top: -15,
          borderRadius: "50%",
          backgroundColor: ORANGE_COLOR,
        }}>
          <p style={{ margin: 0, marginLeft: left ? -65 : 35, marginTop: -10, fontSize: 28 }}>{time}</p>
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

export default Timeline;