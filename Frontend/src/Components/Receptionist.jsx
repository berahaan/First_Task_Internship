import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HRPage = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const response = await axios.get("http://localhost:4000/receptionist", {
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

  return (
    <div>
      <h1>HR Page</h1>
      <p>{message}</p>
    </div>
  );
};

export default HRPage;
