import React, { useContext, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [visible, setVisible] = useState(true);
  const [texttype, settextType] = useState("password");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleVisiblity = () => {
    if (!visible) {
      setVisible(true);
      settextType("password");
    } else {
      setVisible(false);
      settextType("text");
    }
  };

  const handleEmailPassLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.pass.value;
    logIn(email, pass).then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    });
  };

  const handleGoogleLogin = () => {
    console.log("google");
  };

  return (
    <section className="mx-[10px] my-[200px] lg:my-[300px] lg:mx-[520px]">
      <div className="w-[385px] h-[480px] bg-base-100 rounded-2xl shadow-Fxl p-4">
        <div className=" font-sans font-normal">
          <h2 className="text-xl text-center">Login :D</h2>
          <form onSubmit={handleEmailPassLogin}>
            <div className=" my-4">
              <div className="block p-3">
                <h3 className=" mb-2 text-sm">Email</h3>
                <input
                  type="text"
                  placeholder=""
                  name="email"
                  className="input input-bordered w-full max-w-xs h-[44px]"
                  required
                />
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
                />
              </div>
              <div className=" text-xs px-3">
                <Link>
                  {" "}
                  <p>Forgot password?</p>
                </Link>
              </div>
              <div className="p-3">
                <input
                  type="submit"
                  className="btn w-full h-[48px]"
                  value="LOGIN"
                />
              </div>
              <div className=" text-xs text-center px-3">
                <p>
                  New to Doctors Portal?{" "}
                  <Link to="/register">
                    {" "}
                    <span className="text-secondary">Create New Account</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
          <div className="text-center">OR</div>
          <div className="text-center p-3">
            <button
              onClick={handleGoogleLogin}
              className="border-4 border-accent w-full h-[48px] rounded-xl transition-all hover:bg-slate-300 hover:ease-in"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
