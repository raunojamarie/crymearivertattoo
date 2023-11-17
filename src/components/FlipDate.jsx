import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import './flipdate.css';

export const FlipDate = ({ value }) => {
  const divRef = useRef();
  const tickRef = useRef();
  const [tickValue, setTickValue] = useState(value);

  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit
    });

    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  useEffect(() => {
    const offset = new Date();
    const date2 = new Date("2024-05-24T14:00:00")
    var diff = date2.valueOf() - new Date().valueOf();
    var diffInHours = diff/1000/60/60;
    const timeDuration = Tick.helper.duration(diffInHours, "hours");

    // final deadline
    const deadline = new Date(
      offset.setMilliseconds(offset.getMilliseconds() + timeDuration)
    );

    const counter = Tick.count.down(deadline, {
      format: ["d", "h", "m", "s"]
    });

    // When the counter updates, update React's state value
    counter.onupdate = function (value) {
      setTickValue(value);
    };

    return () => {
      // counter.timer.stop();
    };
  }, [value]);

  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = tickValue;
    }
  }, [tickValue]);

  return (
    <div ref={divRef} className="tick">
      <div data-repeat="true">
        <span data-view="flip" />
      </div>
    </div>
  );
};
