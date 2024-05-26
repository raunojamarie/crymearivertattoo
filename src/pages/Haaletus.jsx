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
        </p>
        <p className="text-black">
          {t("public-vote-text")}
        </p>
        <div className="align padding-bottom">
        <a href="https://pollunit.com/en/polls/crymeariver" target="blank" className="button-orange">{t("public-vote-btn")}</a>
        </div>
      </div>
    </>
  )
}

export default Haaletus;
