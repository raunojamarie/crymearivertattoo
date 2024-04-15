import React from "react";
import { t } from "../components/translation/translation";

const Haaletus = () => {
  return (
    <>
      <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
        <p className="big-title-orange rahvahaaletus-title">
          {window.location.href.includes("/en")
            ? <span>
                <span>
                  PUBLIC
                </span>
                <span style={{ paddingLeft: 20}}>
                  VOTE
                </span>
              </span>
            : <span>rahvahääletus</span>
          }
        </p>
      </div>

      <div className="content-wrapper align" style={{ position: "relative"}}>
        <p className="centered-absolute-text" style={{ color: "black" }}>
          {t("public-vote-announced-soon")}
        </p>
        <p className="text-black blur disabled">
          {t("public-vote-text")}
        </p>
        <div className="align padding-bottom blur">
        <a href="https://forms.gle/AfQhmC5nWPsQsLqJ7" target="blank" className="disabled button-orange">Hääleta siin!</a>
          {/* <a href="https://forms.gle/AfQhmC5nWPsQsLqJ7" target="blank" className="button-orange"{t("public-vote-here")}</a> */}
        </div>
      </div>
    </>
  )
}

export default Haaletus;
