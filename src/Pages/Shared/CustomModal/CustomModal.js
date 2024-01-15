import React from "react";

const CustomModal = ({
  title,
  message,
  closeModal,
  ModalData,
  successAction,
}) => {
  //console.log(ModalData);
  return (
    <div>
      <input type="checkbox" id="custom_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(ModalData._id)}
              htmlFor="custom_modal"
              className="btn"
            >
              SURE
            </label>
            <button onClick={closeModal} className=" btn btn-outline btn-error">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
