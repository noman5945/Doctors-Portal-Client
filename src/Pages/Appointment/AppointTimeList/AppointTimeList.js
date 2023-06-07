import AppointOptionsCard from "../AppointOptions/AppointOptionsCard";

const AppointTimeList = ({ treatMent, setShowTimelist, timeslots }) => {
  return (
    <div className=" my-8">
      <h2 className=" my-5 text-center font-normal text-xl text-secondary">
        Appointment Timelist of {treatMent}
      </h2>
      <div className=" my-3">
        <div className="flex flex-row justify-around px-6 font-normal text-xl">
          <h2>Time Slots {timeslots.length}</h2>
          <h2>Click for Appointment</h2>
        </div>
        {timeslots.map((timeslot) => {
          return <AppointOptionsCard time={timeslot}></AppointOptionsCard>;
        })}
      </div>
      <button
        className="btn  mt-3 bg-redBack text-white rounded-lg border-stone-50 hover:bg-darkRed"
        onClick={() => setShowTimelist(false)}
      >
        Close List
      </button>
    </div>
  );
};

export default AppointTimeList;
