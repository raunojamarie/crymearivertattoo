import React from "react";
import { ORANGE_COLOR } from "../App";

const Haaletus = () => {
  return (
    <>
      <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
        <p className="big-title-orange rahvahaaletus-title">
          rahvahääletus
        </p>
      </div>

      <div className="content-wrapper align" style={{ position: "relative"}}>
        <p className="centered-absolute-text" style={{ color: "black" }}>
            Info peagi tulekul!
        </p>
        <p className="text-black blur disabled">
          CRY ME A RIVER tattoofestivalil on üks kategooria,
          "People's Choice", milles autasustatakse kolm enim publikuhääli saanud tätoveeringut.
          Vaata pilte ja anna hääl oma lemmikule!
        </p>
        <div className="align padding-bottom blur">
        <a href="#" class="disabled button-orange">Hääleta siin!</a>
          {/* <a href="https://forms.gle/AfQhmC5nWPsQsLqJ7" target="blank" className="button-orange">Hääleta siin!</a> */}
        </div>
      </div>
    </>
  )
}

export default Haaletus;
