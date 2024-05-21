import axios from 'axios';

const API_URL = 'http://localhost:5000';


interface LoginData {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string; // или другие данные об успешной аутентификации
}

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const login = async (data: LoginData): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, data);
    return response.data;
};


export const registerUser = async (user: { email: string, password: string }) => {
    const response = await axios.post(`${API_URL}/register`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};
