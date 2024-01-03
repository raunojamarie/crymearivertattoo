import React from "react";
import { ORANGE_COLOR } from "../App";

const Info = () => {
  return (
    <>

      <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
        <p className="big-title-orange">
          info
        </p>
      </div>

      <div className="align">
        <p className="text-black">
          Lõuna-Eesti tätoveerimiskultuur on olnud siiani kui suletud uste taga hoitud saladus, kuid juba järgmise aasta maikuus lennutame siia samma Tartu Sadamateatrisse kokku tipptasemel tätoveerimiskunstnikud nii Eestist kui ka kaugemalt.
          Festivali peamiseks fookuseks on tätoveeringud, mis sünnivad ürituse ajal, ning mida tehakse külastajatele.
          Kohapeal saavad olema artistid nii Eestist kui ka kaugemalt, kes jagavad teiega oma loometööd ning astuvad võistlustulle, et välja selgitada kahe päeva jooksul tehtud tätoveeringutest parimad.
        </p>
      </div>

      <div className="video">
        <iframe width="720" height="360" src="https://www.youtube.com/embed/FCEvEXFwAUQ?si=VmN1881Muv2YtfEP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
    </>
  )
}

export default Info;
