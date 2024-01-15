import React from "react";

const DoctorsTable = ({ datas, deletefunc }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => {
            return (
              <tr key={data._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-24 rounded-md">
                        <img src={data.DocImg} alt={data.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data.name}</div>
                    </div>
                  </div>
                </td>
                <td>{data.speciality}</td>
                <td>{data.email}</td>
                <th>
                  <label
                    htmlFor="custom_modal"
                    onClick={() => deletefunc(data)}
                    className="btn btn-error btn-sm"
                  >
                    DELETE
                  </label>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsTable;
