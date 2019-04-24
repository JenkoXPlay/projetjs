import App from './App';

const headers = {
    'Content-Type': 'application/json'
};

const burl = "http://localhost:8081";

export default {

    register : function (send) {
        return App.post(burl + '/register', send, {headers: headers});
    }

}