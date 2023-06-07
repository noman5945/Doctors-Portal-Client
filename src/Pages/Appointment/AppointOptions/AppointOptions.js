import React from "react";
import AppointOptionsCard from "./AppointOptionsCard";
//import AppointTimeList from "../AppointTimeList/AppointTimeList";

const AppointOptions = ({ date, options }) => {
  /*const [showTimelist, setShowTimelist] = useState(false);
  const [treatMent, setTreatment] = useState("");
  const [timeSlots, setTimeslots] = useState([]);

  const handleAppointMent = (serve, slots) => {
    setShowTimelist(true);
    setTreatment(serve);
    setTimeslots(slots);
    console.log(timeSlots.length);
    console.log(options);
    console.log(treatMent);
  };
  */
  const handleAppointMent = () => {
    console.log("parent not work man");
  };

  return (
    <section className="my-16">
      <div className="text-center font-normal ">
        <p className="text-xl text-secondary">Available services On {date}</p>
        <p className="text-xl text-ash">Please Select a Service</p>
      </div>
      <div className=" my-5 grid grid-cols-1 lg:grid-cols-3 gap-3">
        {options.map((option) => {
          return (
            <AppointOptionsCard
              key={option._id}
              title={option.name}
              slots={option.slots}
              handleAppointMent={handleAppointMent}
            ></AppointOptionsCard>
          );
        })}
      </div>
      {/*showTimelist ? (
        <AppointTimeList
          treatMent={treatMent}
          timeslots={timeSlots}
          setShowTimelist={setShowTimelist}
        ></AppointTimeList>
      ) : (
        <></>
      )*/}
    </section>
  );
};

export default AppointOptions;
