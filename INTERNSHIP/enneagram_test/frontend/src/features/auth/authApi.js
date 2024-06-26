import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const fetchAuthenticatedUser = createAsyncThunk(
  "auth/fetchAuthenticatedUser",
  async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the authorization header
        },
      };
      const response = await axios.get(
        "http://localhost:5000/users/me",
        config
      ); // Adjust the URL as needed
      console.log("authenticated user: ", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
