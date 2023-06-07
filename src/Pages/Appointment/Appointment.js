import React, { useEffect, useState } from "react";
import AppointBanner from "./AppointBanner/AppointBanner";
import AppointOptions from "./AppointOptions/AppointOptions";
import { format } from "date-fns/esm";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  const [options, setOptions] = useState([]);
  let date = "";
  if (selected) {
    date = format(selected, "PP");
    //console.log(date);
  }
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setOptions(data));
  });
  return (
    <section>
      <AppointBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointBanner>
      <AppointOptions date={date} options={options}></AppointOptions>
    </section>
  );
};

export default Appointment;
