export default function authHeader(){
    let jwtString = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5MjAxMDk3MywiZXhwIjoxNjkyMDk3MzczfQ.u3UJDmsYvElRHHYYoYTMEk_ulqjxSpYkieaabm4oJjk"

    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.accessToken){
        console.log("Authorization : +Bearer >>>"+jwtString)
        return {Authorization : 'Bearer '+jwtString };
    }else return {}
}
