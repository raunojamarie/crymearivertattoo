import React from "react";
import { ORANGE_COLOR } from "../App";

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
            <span style={{ padding: "0px 20px"}}>
            2024
          </span>
            </span>
          </p>
        </div>

        <div className="align" style={{ position: "relative"}}>
        <p className="text-white" style={{ fontSize: 28, color:"white", fontWeight:"500", position: "absolute", top: "calc(50% - 80px)", left:"calc(50% - 100px)"}}>
            Info peagi tulekul!
        </p>
          <p className="text-white blur disabled">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus debitis, impedit quos libero, voluptate doloremque eos expedita,
            iste beatae quam totam itaque laborum sint iusto modi. Perferendis ducimus quod doloremque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus debitis, impedit quos libero, voluptate doloremque eos expedita, iste beatae quam totam itaque laborum sint iusto modi.
            Perferendis ducimus quod doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus debitis, impedit quos libero, voluptate doloremque eos expedita, iste beatae quam totam itaque laborum sint iusto modi.
            Perferendis ducimus quod doloremque.
          </p>
          <div className="align padding-bottom">

          {/* <a href="https://tartu2024.ee/" disabled target="blank" className="button-green">Link</a> */}
          <a href="#" class="disabled button-green blur">link</a>
          </div>
          </div>
      </div>
    </>
  )
}

export default Tartu;
