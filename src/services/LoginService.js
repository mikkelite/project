import http from "../HttpRequests";

class LoginService{
    login(data){
        return http.post("/login", data);
    }
}

export default new LoginService();