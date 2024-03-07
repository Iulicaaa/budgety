import axios from "axios";

export const functieDeRequest = () => {};

export * from "./auth";
export * from "./budgets";
export * from "./transactions";

axios.defaults.baseURL = "https://budgety-api-node.onrender.com";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Authorization"] =
  "Bearer " + localStorage.getItem("authToken");

type Category = {
  name: string;
};

type UpdateRequest = {
  name: string;
  categoryId: string;
};

type DeleteRequest = {
  categoryId: string;
};

type CreateCategoryResponse = {
  _id: string;
  service: string;
  amount: number;
  paymentDate: string;
  categoryId: string;
};

export const CreateCategory = async (data: Category) => {
  try {
    const response = await axios.post<CreateCategoryResponse>(
      "/categories/",
      data,
    );

    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const CategoryList = async () => {
  try {
    const response = await axios.get("/categories/");
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const UpdateCategoryId = async (data: UpdateRequest) => {
  try {
    const response = await axios.put<CreateCategoryResponse>(
      "/categories/",
      data,
    );
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const DeleteCategory = async (data: DeleteRequest) => {
  try {
    const response = await axios.delete<CreateCategoryResponse>(
      `/categories/${data.categoryId}`,
    );
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};
