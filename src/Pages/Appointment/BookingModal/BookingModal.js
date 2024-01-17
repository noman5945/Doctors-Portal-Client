import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ optionObj, date }) => {
  const { user } = useContext(AuthContext);
  const { name, price, slots } = optionObj;
  const navigate = useNavigate();
  const apiBooking = "http://localhost:5000/bookings";

  const handleBooking = (event) => {
    if (user == null) {
      navigate("/register", { replace: true });
      return;
    }
    event.preventDefault();
    const form = event.target;
    const time = form.slot.value;
    const pname = form.pname.value;
    const date = form.date.value;
    const contact = form.contact.value;
    const bookingData = {
      Service: name,
      Patient: pname,
      Time: time,
      Date: date,
      Contact: contact,
      Email: user.email,
      Price: price,
    };

    fetch(apiBooking, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          document.getElementById("my_modal_6").checked = false;
        } else {
          alert(data.messege);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <form className="grid grid-cols-1 gap-2" onSubmit={handleBooking}>
            <input
              type="text"
              value={date}
              disabled
              className="input input-ghost input-bordered w-full "
              name="date"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Patient Name"
              className="input input-ghost w-full  input-bordered"
              name="pname"
            />
            <input
              type="text"
              placeholder="Contact No"
              className="input input-ghost w-full input-bordered"
              name="contact"
            />
            <br />
            <div className="flex flex-row items-center justify-between">
              <input
                className="btn btn-accent w-1/2 "
                type="submit"
                value="Submit"
              />
              <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">
                  Close!
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
