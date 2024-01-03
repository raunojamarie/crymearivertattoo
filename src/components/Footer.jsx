import React from "react";
import { ORANGE_COLOR } from "../App";

const Footer = () => {
  return (
    <>
      <div style={{ width: "100%", height: 100, backgroundColor: "black", color: "white", display: "grid", justifyContent: "center", alignContent: "center" }}>
        <p style={{ fontSize: 24, color: "#789301" }}> &copy; Tartu Alternative Arts {new Date().getFullYear()} </p>
      </div>
    </>
  )
}

export default Footer;
