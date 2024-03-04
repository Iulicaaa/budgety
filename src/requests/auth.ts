import axios from "axios";

export const LogIn = async (username: string, password: string) => {
  try {
    const response = await axios.post("/auth/login", {
      username: username,
      password: password,
    });

    const token = response.data.token;
    localStorage.setItem("authToken", token);
    axios.defaults.headers["Authorization"] = "Bearer " + token;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const Register = async (
  username: string,
  password: string,
  fullName: string,
) => {
  try {
    const response = await axios.post("/auth/register", {
      username: username,
      password: password,
      fullName: fullName,
    });

    const token = response.data.token;
    localStorage.setItem("authToken", token);
    axios.defaults.headers["Authorization"] = "Bearer " + token;
  } catch (error) {
    console.error("Error: ", error);
  }
};
