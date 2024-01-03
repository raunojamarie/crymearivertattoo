import React from "react";

const Live = () => {
  return (
    <>
      <div className="black-bacgkround">
        <div style={{ width: "100%", padding: "0 0", textAlign: "center", position: "relative", }}>
          <p className="big-title-green">
            live
          </p>
        </div>

        <div className="align">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis, impedit quos libero,
            voluptate doloremque eos expedita, iste beatae quam totam itaque laborum sint iusto modi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis, impedit quos libero,
            voluptate doloremque eos expedita, iste beatae quam totam itaque laborum sint iusto modi.
          </p>
        </div>

        <div className="video">
        <iframe width="720" height="360" src="https://www.youtube.com/embed/P9C25Un7xaM?si=p2HIoqE_rVVUnhCk&autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay=0;" allowfullscreen>
        </iframe>
        </div>
      </div>
    </>
  )
}

export default Live;
