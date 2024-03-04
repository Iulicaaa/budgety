import axios from "axios";

export const functieDeRequest = () => {};

export * from "./auth";
export * from "./budgets";

axios.defaults.baseURL = "https://budgety-api-node.onrender.com";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Authorization"] =
  "Bearer " + localStorage.getItem("authToken");

export const CreateTransactions = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(
      "/transactions/",
      {
        service: "korean",
        amount: "200",
        paymentDate: "2009-11-13T10:39:35Z",
        categoryId: "65df7a482f64263285be4a9d",
      },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const TransactionList = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.get("/transactions/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};
