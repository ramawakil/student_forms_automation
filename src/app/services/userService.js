import http from "./httpService";
import config from '../config.json';

const apiEndpoint = config.apiEndPoint + "/api/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
