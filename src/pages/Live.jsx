import React from "react";
import { t } from "../components/translation/translation";

const Live = () => {
  return (
    <>
      <div className="black-bacgkround">
        <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative", }}>
          <p className="big-title-green">
            live
          </p>
        </div>

        <div>
          <p className="text-center-white">
            {t("live-text")}
          </p>
        </div>

        <div className="align" style={{ paddingBottom: 40, position: "relative" }}>{/* 
        <p className="centered-absolute-text">
              {t("live-text-countdown")}
            </p> */}
          <div className="video-wrapper" style={{ position: "relative", zIndex: 0 }}>
            <iframe className="video" src="https://www.youtube.com/embed/6DjfM1ywV-w?si=2KxHLLwxa9XOIYaf&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
          </div>
        </div>

      </div>
    </>
  )
}

export default Live;
