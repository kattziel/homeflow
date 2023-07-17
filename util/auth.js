import axios from "axios";

const API_KEY = "AIzaSyCBOOU19tedM_f6xOykfJDfgbQVUU0ZLYA";

export async function createUser(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=` + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  const token = response.data.idToken;
  return token;
}

export async function loginUser(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=` + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  const token = response.data.idToken;
  return token;
}

export async function resetPassword(email) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=` + API_KEY,
    {
      email: email,
      requestType: "PASSWORD_RESET",
    }
  );
  return response.data;
}