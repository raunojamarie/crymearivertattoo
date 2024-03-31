import React from "react";
import { t } from "../components/translation/translation";

const Haaletus = () => {
  return (
    <>
      <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
        <p className="big-title-orange rahvahaaletus-title">
          {t("public-vote-title")}
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
        <a href="#" class="disabled button-orange">{t("public-vote-here")}</a>
          {/* <a href="https://forms.gle/AfQhmC5nWPsQsLqJ7" target="blank" className="button-orange">Hääleta siin!</a> */}
        </div>
      </div>
    </>
  )
}

export default Haaletus;
