import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from '../../Config';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password:"",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const result = await response.json();
      console.log("Login sucessful:", result);


      if (result.emailMessage) {
        alert(result.emailMessage);
      }else if (result.passwordMessage) {
        alert(result.passwordMessage);
      }
      else if (result.message) {
        alert(result.message);
        navigate("/checkout"); // Redirect to checkout page
      } else {
        alert("Login failed. Please try again.");
      }

    } catch (error) {
      console.error("Error submitting order:", error);
      // Handle error (show error message to user)
    }

    // navigate('/checkout');
  };
  return (
    <div>
      <form
        onSubmit={handlesubmit}
        className=" w-full h-ful flex justify-center items-center"
      >
        <div className=" h-[450px] w-full md:w-[80%] lg:w-[50%] flex flex-col items-center justify-center space-y-6">
          <div className=" h-[120px] w-[80%] bg-[] text-center flex flex-col justify-center ">
            <h1 className="text-[1.5rem] font-bold text-boldtext">
              Welcome to Accon Lab
            </h1>
            <p className=" text-[1.1rem]">
              Type your e-mail to log in or create a Accon Lab account.
            </p>
          </div>

          <input
            type="text"
            required
            placeholder="email"
            name="email"
            value={formData.email}
            className=" h-[55px] w-[80%] border-boldtext border-[2px] rounded-md"
            onChange={handleInputChange}
          />

          <input
            type="password"
            required
            placeholder="password"
            name="password"
            value={formData.password}
            className=" h-[55px] w-[80%] border-boldtext border-[2px] rounded-md"
            onChange={handleInputChange}
          />

          <div className=" w-[80%] text-center">
            <input
              type="submit"
              value="Continue"
              className=" h-[50px] cursor-pointer w-full bg-boldtext font-semibold text-white rounded-md hover:bg-textc"
            />

            <p>By continuing you agree to Accon Lab’s</p>
            <Link>
              <span className=" text-textc underline">Terms and Condition</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
