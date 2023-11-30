import React from "react";

const BookingModal = ({ optionObj, date }) => {
  const { name, slots } = optionObj;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const time = form.slot.value;
    const name = form.pname.value;
    const date = form.date.value;
    const contact = form.contact.value;
    console.log(time + " " + name + " " + date + " " + contact);
    fetch("http://localhost:5000/appointOptions");
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
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
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
