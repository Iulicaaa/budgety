import axios from "axios";

export const createBudget = () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = axios.post(
      "/budgets/",
      {
        categoryId: "65df7ceabbfaf34ed67a7be4",
        amount: 5700,
      },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const BudgetList = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.get("/budgets/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const UpdateBudgets = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.put(
      "/budgets/65df9822cf64b5a9ca80ccf7",
      {
        amount: "5",
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

export const DeleteBudgets = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.delete("/budgets/65e861b73b25e53a0a5a0aa1", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};
