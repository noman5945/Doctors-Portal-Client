import React, { useEffect, useState } from "react";
import AppointBanner from "./AppointBanner/AppointBanner";
import AppointOptions from "./AppointOptions/AppointOptions";
import { format } from "date-fns/esm";
import Loader from "../Shared/Loader/Loader";
//import { useQuery } from "@tanstack/react-query";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  let date = "";
  if (selected) {
    date = format(selected, "PP");
    //console.log(date);
  }

  // const { data: options = [], isLoading } = useQuery({
  //   queryKey: ["options"],
  //   queryFn: () => {
  //     fetch("https://doctors-portal-server-one-gamma.vercel.app/appointOptions").then((res) => res.json());
  //   },
  // });

  useEffect(() => {
    fetch(
      `https://doctors-portal-server-one-gamma.vercel.app/appointOptions?date=${date}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
        setLoading(false);
      });
  });
  if (loading) {
    return <Loader></Loader>;
  }
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
