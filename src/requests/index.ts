import axios from "axios";

export const functieDeRequest = () => {};

export * from "./auth";
export * from "./budgets";
export * from "./transactions";

axios.defaults.baseURL = "https://budgety-api-node.onrender.com";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Authorization"] =
  "Bearer " + localStorage.getItem("authToken");

export const CreateCategory = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(
      "/categories/",
      {
        name: "Haine",
      },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const CategoryList = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.get("/categories/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const UpdateCategoryId = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.put(
      "/categories/65df9279b0edb490df810aa9",
      {
        name: "Transport",
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const DeleteCategory = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.delete(
      "/categories/65e8636d3b25e53a0a5a0ae3",
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};
