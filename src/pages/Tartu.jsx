import React from "react";
import { t } from "../components/translation/translation";

const Tartu = () => {
  return (
    <>
      <div className="black-bacgkround">
        <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative", }}>
          <p className="big-title-green">
            <span>
              <span>
                TARTU
              </span>
              <span style={{ padding: "0px 20px" }}>
                2024
              </span>
            </span>
          </p>
        </div>

        <div className="align content-wrapper" style={{ position: "relative" }}>
          <p className="tartu-text">
            {t("tartu-2024-text")}
          </p>
          <div className="align padding-bottom">

            <a href="https://tartu2024.ee/" disabled target="blank" className="button-green">vaata lisa</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tartu;
