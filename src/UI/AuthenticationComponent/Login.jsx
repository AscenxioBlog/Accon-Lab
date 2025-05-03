import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContxt } from "./AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  let {setIsLoggedIn} = useContext(AuthContxt)
  const from = location.state?.from?.pathname || '/'; // Default to homepage

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3600/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const result = await response.json();
      console.log("Login response:", result);
      setIsLoggedIn(true)

      if (result.emailMessage) {
        alert(result.emailMessage);
      } else if (result.passwordMessage) {
        alert(result.passwordMessage);
      } else if (result.message) {
        alert(result.message);

        // Redirect to previous page if exists, else home
        navigate(from, { replace: true });
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handlesubmit}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="h-[450px] w-full md:w-[80%] lg:w-[50%] flex flex-col items-center justify-center space-y-6">
          <div className="h-[120px] w-[80%] text-center flex flex-col justify-center">
            <h1 className="text-[1.5rem] font-bold text-boldtext">
              Welcome to Accon Lab
            </h1>
            <p className="text-[1.1rem]">
              Type your e-mail to log in or create a Accon Lab account.
            </p>
          </div>

          <input
            type="text"
            required
            placeholder="email"
            name="email"
            value={formData.email}
            className="h-[55px] w-[80%] border-boldtext border-[2px] rounded-md"
            onChange={handleInputChange}
          />

          <input
            type="password"
            required
            placeholder="password"
            name="password"
            value={formData.password}
            className="h-[55px] w-[80%] border-boldtext border-[2px] rounded-md"
            onChange={handleInputChange}
          />

          <div className="w-[80%] text-center">
            <input
              type="submit"
              value="Continue"
              className="h-[50px] cursor-pointer w-full bg-boldtext font-semibold text-white rounded-md hover:bg-textc"
            />

            <p className="text-gray-500 text-[14px] mt-3">
              <span>Don't have an account? </span>
              <Link to="/register">
                <span className="text-textc underline">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
