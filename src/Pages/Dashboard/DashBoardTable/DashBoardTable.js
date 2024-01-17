import React from "react";
import { Link } from "react-router-dom";

const DashBoardTable = ({ data }) => {
  const tabledata = data;
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Service</th>
            <th>Patient Name</th>
            <th>Time</th>
            <th>Date</th>
            <th>Contact</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tabledata.map((tdata, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{tdata.Service}</td>
                <td>{tdata.Patient}</td>
                <td>{tdata.Time}</td>
                <td>{tdata.Date}</td>
                <td>{tdata.Contact}</td>
                {tdata.Price && !tdata.Paid && (
                  <Link to={`/dashboard/payment/${tdata._id}`}>
                    <button className=" btn btn-sm  btn-accent">PAY</button>
                  </Link>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoardTable;
