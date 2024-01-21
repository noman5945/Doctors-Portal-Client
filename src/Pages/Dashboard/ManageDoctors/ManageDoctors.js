import React, { useContext, useState } from "react";
import DoctorsTable from "../DashBoardTable/DoctorsTable";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import toast from "react-hot-toast";
import CustomModal from "../../Shared/CustomModal/CustomModal";

const ManageDoctors = () => {
  const { user } = useContext(AuthContext);
  const [doctor, setDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const getDoctorsAPI = `https://doctors-portal-server-one-gamma.vercel.app/manage-doctors?email=${user.email}`;
      const res = await fetch(getDoctorsAPI, {
        method: "POST",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const delete_doc_API = `https://doctors-portal-server-one-gamma.vercel.app/delete-doctor?id=${id}`;

    fetch(delete_doc_API, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((dec) => {
        if (dec.deletedCount > 0) {
          toast.success("Doctor Deleted");
          refetch();
        }
      });
  };

  const openModal = (obj) => {
    setDoctor(obj);
  };

  const closModal = () => {
    setDoctor(null);
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className=" p-4">
      <h3 className=" text-xl font-semibold">Manage Doctors</h3>
      <DoctorsTable datas={doctors} deletefunc={openModal}></DoctorsTable>
      {doctor && (
        <CustomModal
          title={"Warning!"}
          message={"Are you sure want to delete this Docotor?"}
          closeModal={closModal}
          ModalData={doctor}
          successAction={handleDelete}
        ></CustomModal>
      )}
    </div>
  );
};

export default ManageDoctors;
