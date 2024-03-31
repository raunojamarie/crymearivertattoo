import React from "react";
import { t } from "../components/translation/translation";

const Info = () => {
  return (
    <>
      <div>
        <p className="big-title-orange info-title">
          <span>
            <span>
              {t("info-title-0")}
            </span>
            <span className="mobile-title-padding" style={{ padding: "0px 20px" }}>
              {t("info-title-1")}
            </span>
            <span>
              {t("info-title-2")}
            </span>
          </span>

        </p>
      </div>

      <div className="align content-wrapper">
        <p className="text-black">
          {t("info-text")}
        </p>
      </div>

      <div className="align padding-bottom mobile-padding-bottom" style={{  }}>
        <a href="https://www.piletilevi.ee/est/piletid/festival/mitmesugust2/cry-me-a-river-tattoo-ja-elustiilifestival-89403/?design&shop_provider=tartu2024&fbclid=IwAR2lfN8GSvV-PKPlQVJYCRgSTnM80l52hpm4JZQaenF-Vb_GRkUJT2MFGFc" target="blank" className="button-orange">{t("tickets")}</a>
      </div>

      <div style={{ display: "grid", placeContent: "center", width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
        <div style={{
          display: "flex", flexDirection: "row", gap: 40, width: "80%", maxWidth: 600,
          margin: "0 auto", marginBottom: 60, alignItems: "center", height: 105, placeContent: "center"
        }}>
          <div className="contact-icon">
            <a href="https://www.instagram.com/crymeariver.tartu/" className="contact-icon icon" target="blank">
              <i class="fa-brands fa-instagram contact-icon-i" style={{ fontSize: 80, padding: 20, borderRadius: "50%" }}></i>
              <p className="contact-icon-text" style={{ margin: -10, opacity: 0.5 }}>@crymeariver.tartu</p>
            </a>
          </div>
          <div className="contact-icon">
            <a href="https://www.facebook.com/crymeariver.tattoofest" className="contact-icon icon" target="blank">
              <i class="fa-brands fa-facebook contact-icon-i" style={{ fontSize: 80, padding: 20, borderRadius: "50%" }}></i>
              <p className="contact-icon-text" style={{ margin: -10, opacity: 0.5 }}>@crymeariver.tattoofest</p>
            </a>
          </div>
        </div>
      </div>

      <div className="video-wrapper">
        <iframe className="video" src="https://www.youtube.com/embed/7LYlaOOkzW4?si=1tNNdf-OnBzVtu7i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
      <div className="video-wrapper">
        <iframe className="video" src="https://www.youtube.com/embed/orvT8pvP-eI?si=nCPGV9qelH_GKmOm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
    </>
  )
}

export default Info;
