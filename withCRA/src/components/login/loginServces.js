import api from '../../apiWrapper';

export const authenticateUser = (user) => {
    return api.post('/api/v1/login', user);
}

export const passwordRecovery = (email) => {
    return api.post('/api/v1/forgotPwd', email);
}