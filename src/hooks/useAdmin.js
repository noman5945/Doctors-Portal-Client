import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoader, setAdminLoader] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/allusers/admin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdminLoader(false);
        setIsAdmin(data.isAdmin);
      });
  }, [email]);
  return [isAdmin, adminLoader];
};

export default useAdmin;
