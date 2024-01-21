import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const tokenAPI = `https://doctors-portal-server-one-gamma.vercel.app/jwt?email=${email}`;
    fetch(tokenAPI)
      .then((res) => res.json())
      .then((data) => {
        if (data.accesToken) {
          console.log(data.accesToken);
          localStorage.setItem("accessToken", data.accesToken);
          //navigate("/");
          setToken(data.accesToken);
        }
      });
  }, [email]);
  return [token];
};

export default useToken;
