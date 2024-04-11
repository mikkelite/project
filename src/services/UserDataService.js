import http from "../HttpRequests";

class UserDataService {

    get(uid){
        return http.get(`/users/${uid}`);
    }

}

export default new UserDataService();