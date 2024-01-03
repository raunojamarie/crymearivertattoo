import React from "react";
import { ORANGE_COLOR } from "../App";

const Haaletus = () => {
  return (
    <>
    
    <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
        <p className="big-title-orange">
          rahvahääletus
        </p>
    </div>

    <div className="align">
      <p className="text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Possimus debitis, impedit quos libero, voluptate doloremque eos expedita, 
        iste beatae quam totam itaque laborum sint iusto modi. Perferendis ducimus quod doloremque.
        </p>
      <div className="align padding-bottom">
      <a href="https://forms.gle/AfQhmC5nWPsQsLqJ7" target="blank" className="button-orange">Hääleta siin!</a>
      </div>
    </div>
    </>
  )
}

export default Haaletus;
