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

        <div className="align" style={{ paddingBottom: 40, position: "relative" }}>
        <p className="centered-absolute-text">
              {t("live-text-countdown")}
            </p>
          <div className="video-wrapper video-blur disabled" style={{ position: "relative", zIndex: 0 }}>
            <iframe className="video" src="https://www.youtube.com/embed/7LYlaOOkzW4?si=1tNNdf-OnBzVtu7i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
          </div>
        </div>

      </div>
    </>
  )
}

export default Live;
