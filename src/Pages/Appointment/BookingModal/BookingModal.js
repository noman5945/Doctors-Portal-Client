import React from "react";

const BookingModal = ({ optionObj, date }) => {
  const { name, slots } = optionObj;
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <form className="grid grid-cols-1 gap-2">
            <input
              type="text"
              value={date}
              disabled
              className="input input-ghost input-bordered w-full "
            />
            <select className="select select-bordered w-full">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-ghost w-full  input-bordered"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-ghost w-full input-bordered"
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
