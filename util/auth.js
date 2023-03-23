import axios from "axios";

const API_KEY = "AIzaSyCBOOU19tedM_f6xOykfJDfgbQVUU0ZLYA";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

//

// export async function login(email, password) {
//   console.log(email, password, "- email and password from auth.js");
//   const response = await axios.post(
//     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
//       API_KEY,
//     {
//       email: email,
//       password: password,
//       returnSecureToken: true,
//     });
//     const token = response.data.tokenId;
//     console.log(response.data, "console log response data from auth js");
//     return token;
// }

// export async function createUser(email, password) {
//   // console.log(email, password, "email and password from create user in auth js");
//   const response = await axios.post(
//     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
//     {
//       email: email,
//       password: password,
//       returnSecureToken: true,
//     }
//   );
//   const token = response.data.idToken;
//   console.log(response.data, "response data");
//   return token;
// }
