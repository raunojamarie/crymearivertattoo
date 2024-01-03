import React from "react";
import { ORANGE_COLOR } from "../App";

const Tartu = () => {
  return (
    <>
    
    <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative" }}>
        <p style={{ position: "relative", backgroundColor: ORANGE_COLOR, fontSize: 32, width: "fit-content", margin: "0 auto", marginBottom: 40, border: "6px solid black", padding: "4px 40px", zIndex: 4 }}>
          TARTU 2024
        </p>
        
        <div style={{ position: "absolute", width: "100%", borderTop: "6px solid black", top: 30, zIndex: 1 }}></div>
    </div>

    <div style={{ display:"grid", alignContent:"center", justifyContent:"center", paddingBottom: 60 }}>
      <p style={{ width: 720 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis, impedit quos libero, voluptate doloremque eos expedita, iste beatae quam totam itaque laborum sint iusto modi. Perferendis ducimus quod doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis, impedit quos libero, voluptate doloremque eos expedita, iste beatae quam totam itaque laborum sint iusto modi. Perferendis ducimus quod doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis, impedit quos libero, voluptate doloremque eos expedita, iste beatae quam totam itaque laborum sint iusto modi. Perferendis ducimus quod doloremque.</p>
      <a href="https://forms.gle/AfQhmC5nWPsQsLqJ7" className="contact-icon" style={{ color:"#789301", textDecoration:"none", fontSize:"32px", textAlign: "center"}}>Link</a>
    </div>
    </>
  )
}

export default Tartu;
