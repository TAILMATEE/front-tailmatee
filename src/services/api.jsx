import axios from "axios";

const apiClient = axios.create({

    baseURL: 'https://back-tailmatee.vercel.app/tailmatee/v1',
    timeout: 5000

});

apiClient.interceptors.request.use(
    (config) => {

        const getToken = localStorage.getItem('token');

        if(getToken){

            const token = JSON.parse(getToken).token;

            config.headers.Authorization = `${token}`;

        }

        return config;

    },

    (e) =>{

        return Promise.reject(e);

    }

)

export const login = async(data) => {

    try{

        return await apiClient.post('/auth/login/', data);

    }catch(e){

        return{

            error: true,
            e,

        }

    }

}

export const register = async(data) => {
    
    try{

        return await apiClient.post('/auth/register/', data);

    }catch(e){

        return{

            error: true,
            e,

        }

    }

}