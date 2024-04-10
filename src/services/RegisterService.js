import http from '../HttpRequests';

class RegisterService {
    createUser(user) {
        return http.post('/users', user);
    }
}

export default new RegisterService();