import  axios  from "axios";

const API_URL = "http://localhost:8080/SpringSecurityWithJwt/api/auth/";

const register= async (username,email,role,password) =>axios.post(API_URL + "signup", {
    username,
    email,
    role,
    password
}); 

// {
//     "username":"user",
//     "email":"user@gmail.com",
//     "role":["user"],
//     "password":"user123"
// }

const login = async (username, password) => {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.status)
        }
        return response.data;
      })
      .catch((err)=>{
        console.log(err.response.status)
        return err.response.status;
      })
  };

  
const logout = () => {
        localStorage.removeItem("user");
};


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
}

export default AuthService;