import axios from "axios";

const API_KEY = "AIzaSyCBOOU19tedM_f6xOykfJDfgbQVUU0ZLYA";

export async function authenticate(email, password) {
  console.log(email, password, "- email and password from auth.js");
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}

export async function createUser(email, password) {
  console.log(email, password);
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  return response;
}
