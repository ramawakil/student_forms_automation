import http from "./client";
import config from '../config/appConfig.json';


const apiEndPoint = config.apiEndPoint;
// const tokenKey = config.apiEndPoint + "/api/token";
const tokenAccess = 'accessTokenKey';
const tokenRefresh = 'refreshTokenKey';

// http.setJwt(getJwt());

export async function login(credentials) {
    await logout();
    const res = await http.post(`${apiEndPoint}/auth/jwt/create/`, credentials);
    // res.data contains { access, refresh }
    await loginWithJwt(res.data);
    return res;
}

export async function fetchUser() {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/auth/users/me/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function loginWithJwt(jwt) {
    await localStorage.setItem(tokenAccess, JSON.stringify(jwt.access));
}

export function logout() {
    localStorage.removeItem(tokenAccess);
}

export function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem(tokenAccess));
    } catch (error) {
        return null;
    }
}

//
export async function getJwt() {
    return await JSON.parse(localStorage.getItem(tokenAccess));
}

const authApi = {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt,
    fetchUser
};

export default authApi;
