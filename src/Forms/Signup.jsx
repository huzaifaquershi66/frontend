import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import useInputLocalStorage from "../hooks/useInputLocalStorage";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, emailAtribs, resetEmail] = useInputLocalStorage("email", "");
  const [password, passwordAtribs, resetPassword] = useInput("");
  const [match, matchAtribs, resetmatch] = useInput("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email, password, match);
    try {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const user = {
        email,
        password,
        timeZone: userTimeZone,
      };
      const response = await axios.post("/users", JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success(response.data.message, {
        autoClose: 1000,
      });
      // console.log(response);

      resetEmail();
      resetPassword();
      resetmatch();
      navigate("/auth");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <h3 className="font-bold text-3xl py-1">Welcome Back</h3>
      <span className="font-medium text-base">Login Back to Continue</span>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <div className="mt-4">
            <label htmlFor="email" className="font-semibold text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...emailAtribs}
              className="w-full mt-1 p-2 rounded bg-bgOne"
              placeholder="Enter a valid email "
            />
          </div>
          <div className="mt-2">
            <label htmlFor="email" className="font-semibold text-base">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...passwordAtribs}
              className="w-full mt-1  p-2 rounded bg-bgOne"
              placeholder="Enter a valid email"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="email" className="font-semibold text-base">
              Confirm Password
            </label>
            <input
              type="password"
              id="match"
              {...matchAtribs}
              className="w-full mt-1  p-2 rounded bg-bgOne"
              placeholder="Re-Enter Password"
            />
          </div>
          <div className="mt-2">
            <span className="text-sm ">
              Already have an account{" "}
              <Link to="/auth" className="text-primary font-semibold">
                Login
              </Link>
            </span>
          </div>
          <div className="mt-8">
            <button className="w-full p-2 rounded bg-primary text-white font-semibold text-xl">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
