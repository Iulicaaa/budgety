import axios from "axios";

type Budget = {
  _id: string;
  amount: number;
  categoryId: string;
};

type DeleteBudgetRequest = {
  categoryId: string;
};

type CreateBudgetRequest = {
  categoryId: string;
  amount: number;
};

type CreateBudgetResponse = Budget;

export const createBudget = async (data: CreateBudgetRequest) => {
  console.log("creating budget");
  try {
    const resp = await axios.post<CreateBudgetResponse>("/budgets", data);

    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const BudgetList = async () => {
  try {
    const response = await axios.get("/budgets/");
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const UpdateBudgets = async (data: CreateBudgetRequest) => {
  try {
    const response = await axios.put<CreateBudgetResponse>("/budgets/", data);
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

//??????????????? - e ok? mai trebuie si create response?

export const DeleteBudgets = async (data: DeleteBudgetRequest) => {
  try {
    const response = await axios.delete(`/budgets/${data.categoryId}`);
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};
