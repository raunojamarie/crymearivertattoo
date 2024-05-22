import React, { useState, useEffect, useRef } from "react";
import { default as Datepicker } from "pickerjs";
import "pickerjs/dist/picker.min.css";

const Picker = props => {
  const [date, setDate] = useState(undefined);
  const [instance, setInstance] = useState(undefined);
  const input = useRef();

  useEffect(() => {
    // CREATE INSTANCE
    const tempInstance = new Datepicker(input.current, {
      format: "mm:ss:SSS",
      headers: true,
      rows: 5,
      controls: true,
      inline: true,
      increment: {
        millisecond: 10
      },
      text: {
        title: 'Vali aeg',
        cancel: 'Cancel',
        confirm: 'OK',
        year: 'Year',
        month: 'Month',
        day: 'Day',
        hour: 'Hour',
        minute: 'Minute',
        second: 'Second',
        millisecond: 'Millisecond',
      }
    });

    setInstance(tempInstance);

    input.current.addEventListener("change", event => {
      props.onChange(event.target.value);
    });
  }, []);

  return <input style={{ width: 278, height: 60, fontSize: 18 }} value={props.value} ref={input} />;
};

export default Picker;
