import React from "react";

const PaymentsTable = ({ data }) => {
  const tabledata = data;
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Payer</th>
            <th>Patient Name</th>
            <th>Time</th>
            <th>Date</th>
            <th>TranxID</th>
            <th>Amount(USD)</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tabledata.map((tdata, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{tdata.Pay_Email}</td>
                <td>{tdata.Patient}</td>
                <td>{tdata.Time}</td>
                <td>{tdata.Date}</td>
                <td>{tdata.Transaction_ID}</td>
                <td>{tdata.Amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;
