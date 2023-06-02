import React, { useState } from "react";
import AppointBanner from "./AppointBanner/AppointBanner";
import AppointOptions from "./AppointOptions/AppointOptions";
import { format } from "date-fns/esm";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  let date = "";
  if (selected) {
    date = format(selected, "PP");
    //console.log(date);
  }
  return (
    <section>
      <AppointBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointBanner>
      <AppointOptions date={date}></AppointOptions>
    </section>
  );
};

export default Appointment;
