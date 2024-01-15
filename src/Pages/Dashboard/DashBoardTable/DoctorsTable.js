import React from "react";

const DoctorsTable = ({ datas }) => {
  console.log(datas);
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
              <>
                <tr key={data._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
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
                    <button className="btn btn-error btn-sm">DELETE</button>
                  </th>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsTable;
