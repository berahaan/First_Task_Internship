import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HRPage = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const response = await axios.get("http://localhost:4000/hr", {
          withCredentials: true,
        });
        setMessage(response.data.message);
      } catch (error) {
        if (error.response || error.response.status === 401) {
          navigate("/login");
        } else {
          setMessage("An error occurred");
        }
      }
    };

    checkAccess();
  }, [navigate]);
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:4000/logout");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div>
      <h1>HR Page</h1>
      <p>{message}</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default HRPage;
