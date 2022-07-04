import http from "./client";
import config from '../config/appConfig.json';
import {getJwt} from "./auth";


const apiEndPoint = config.apiEndPoint + "/api";
// const tokenKey = config.apiEndPoint + "/api/token";
const tokenAccess = 'accessTokenKey';
const tokenRefresh = 'refreshTokenKey';


export async function getStudentRequests() {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/requests/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}


export async function createStudentRequest(data) {
    const access = await getJwt();
    return await http.post(`${apiEndPoint}/requests/`, data, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}


export async function getStudentRequest(id) {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/requests/${id}/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}


export async function updateStudentRequest(id, data) {
    const access = await getJwt();
    return await http.put(`${apiEndPoint}/requests/${id}/`, data, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}


export async function deleteStudentRequest(id) {
    const access = await getJwt();
    return await http.delete(`${apiEndPoint}/requests/${id}/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function getFarms() {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/farms/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function getFarm(id) {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/farms/${id}/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function createFarm(farm) {
    const access = await getJwt();
    return await http.post(`${apiEndPoint}/farms/`, farm, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function updateFarm(id, farm) {
    const access = await getJwt();
    return await http.put(`${apiEndPoint}/farms/${id}/`, farm, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function deleteFarm(id) {
    const access = await getJwt();
    return await http.delete(`${apiEndPoint}/farms/${id}/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}


const studentsApi = {
    getStudentRequests,
    createStudentRequest,
    getStudentRequest,
    updateStudentRequest,
    deleteStudentRequest,


};

export default studentsApi;