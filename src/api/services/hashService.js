import api from './axiosConfig';

export const hashService = {
    calculateHash: async (payload) => {
        try {
            const response = await api.post('/hash', payload);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
}