import axios from "axios";
import TokenService from "./TokenService";

class LoginService{
    login(loginParams){
        return axios.post("http://localhost:8088/api/login", loginParams);
    }

    logout(){
        TokenService.setTokenInHeader();
        return axios.get("http://localhost:8088/api/logout");
    }
}

export default new LoginService();