import axios from "axios";

export const CreateTransactions = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(
      "/transactions/",
      {
        service: "korean",
        amount: "200",
        paymentDate: "2009-11-13T10:39:35Z",
        categoryId: "65df7ceabbfaf34ed67a7be4",
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

export const DeleteTransaction = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.delete(
      "/transactions/65e8620c3b25e53a0a5a0aa4",
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const UpdateTransactionId = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.put(
      "/transactions/65df7ab32f64263285be4aa3",
      {
        service: "autobuz",
        amount: "5",
        paymentDate: "2009-11-13T10:39:35Z",
        categoryId: "65df7a482f64263285be4a9d",
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

export const TransactionId = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.get("/transactions/65df7ab32f64263285be4aa3", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
  } catch (error) {
    console.error("Error: ", error);
  }
};
