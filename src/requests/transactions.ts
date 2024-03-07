import axios from "axios";

type Transaction = {
  service: string;
  amount: number;
  paymentDate: string;
  categoryId: string;
};

type CreateTransactionRequest = Transaction;

type TransactionId = {
  _id: string;
};

type CreateTransactionResponse = {
  _id: string;
  service: string;
  amount: number;
  paymentDate: string;
  categoryId: string;
};

export const CreateTransactions = async (data: CreateTransactionRequest) => {
  try {
    const response = await axios.post<CreateTransactionResponse>(
      "/transactions/",
      data,
    );

    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const TransactionList = async () => {
  try {
    const response = await axios.get("/transactions/");
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const DeleteTransaction = async (data: TransactionId) => {
  try {
    const response = await axios.delete(`/transactions/${data._id}`);
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const UpdateTransactionId = async (data: CreateTransactionRequest) => {
  try {
    const response = await axios.put<CreateTransactionResponse>(
      "/transactions/",
      data,
    );
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const TransactionId = async (data: TransactionId) => {
  try {
    const response = await axios.get(`/transactions/${data._id}`);
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};
