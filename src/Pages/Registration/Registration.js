import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../context/AuthProvider";
//import useToken from "../../hooks/useToken";

const Registration = () => {
  const { creatUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [texttype, settextType] = useState("password");
  const [validPass, setValidpass] = useState(true);
  const [emptyFields, setEmptyFields] = useState(false);
  //const [email, setEmail] = useState("");
  //const [token] = useToken(email);
  const userAddAPI = "http://localhost:5000/addUser";

  /*if (token) {
    navigate("/");
  }*/

  const handleVisiblity = () => {
    if (!visible) {
      setVisible(true);
      settextType("password");
    } else {
      setVisible(false);
      settextType("text");
    }
  };

  const handleEmailPassReg = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const photoURL =
      "https://img.freepik.com/free-icon/user_318-563642.jpg?w=360";

    const userInfo = {
      displayName: name,
      photoURL,
    };
    if (name === "" || email === "" || pass === "") {
      setEmptyFields(true);
    } else {
      setEmptyFields(false);
      creatUser(email, pass, userInfo);

      saveUser(name, email);
    }
  };

  const handlePassValidity = (event) => {
    let tempPass = event.target.value;
    if (tempPass.length < 6) {
      setValidpass(false);
    } else {
      setValidpass(true);
    }
    //console.log(validPass);
  };

  const saveUser = (userName, userEmail) => {
    const userinfo = {
      Name: userName,
      Email: userEmail,
    };
    fetch(userAddAPI, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userinfo),
    })
      .then((res) => res.json())
      .then((data) => getUserToken(userEmail));
  };

  const getUserToken = (email) => {
    const tokenAPI = `http://localhost:5000/jwt?email=${email}`;
    fetch(tokenAPI)
      .then((res) => res.json())
      .then((data) => {
        if (data.accesToken) {
          console.log(data.accesToken);
          localStorage.setItem("accessToken", data.accesToken);
          navigate("/");
        }
      });
  };

  return (
    <section className="mx-[10px] my-[200px] lg:my-[300px] lg:mx-[520px]">
      <div className="w-[385px] h-[480px] bg-base-100 rounded-2xl shadow-Fxl p-4">
        <div className=" font-sans font-normal">
          <h2 className="text-xl text-center">Sign Up</h2>
          <form onSubmit={handleEmailPassReg}>
            <div className=" my-4">
              <div className="block p-3">
                <h3 className=" mb-2 text-sm">Name</h3>
                <input
                  type="text"
                  placeholder=""
                  name="name"
                  className="input input-bordered w-full max-w-xs h-[44px]"
                  required
                />
                {emptyFields ? (
                  <p className="text-darkRed">Empty name field</p>
                ) : (
                  <></>
                )}
              </div>
              <div className="block p-3">
                <h3 className=" mb-2 text-sm">Email</h3>
                <input
                  type="text"
                  placeholder=""
                  name="email"
                  className="input input-bordered w-full max-w-xs h-[44px]"
                  required
                />
                {emptyFields ? (
                  <p className="text-darkRed">Empty email field</p>
                ) : (
                  <></>
                )}
              </div>
              <div className="block p-3">
                <div className="flex flex-row justify-between">
                  <h3 className=" mb-2 text-sm">Password</h3>
                  {visible ? (
                    <EyeIcon
                      onClick={handleVisiblity}
                      className="h-6 w-6 text-blue-500 cursor-pointer"
                    ></EyeIcon>
                  ) : (
                    <EyeSlashIcon
                      onClick={handleVisiblity}
                      className="h-6 w-6 text-blue-500 cursor-pointer"
                    ></EyeSlashIcon>
                  )}
                </div>
                <input
                  type={texttype}
                  placeholder=""
                  name="pass"
                  className="input input-bordered w-full max-w-xs h-[44px]"
                  required
                  onChange={handlePassValidity}
                />
                {validPass ? (
                  <></>
                ) : (
                  <p className=" text-darkRed">
                    Password must be more than 6 characters
                  </p>
                )}
              </div>

              <div className="p-3">
                <input
                  type="submit"
                  className="btn w-full h-[48px]"
                  value="REGISTER"
                />
              </div>
              <div className=" text-xs text-center px-3">
                <p>
                  Already have account?{" "}
                  <Link to="/login">
                    {" "}
                    <span className="text-secondary">Login here</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
