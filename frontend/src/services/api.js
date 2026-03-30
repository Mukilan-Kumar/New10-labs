import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Consultation API
export const consultationAPI = {
  create: (data) => api.post('/consultations', data),
  getAll: () => api.get('/consultations'),
  getByStatus: (status) => api.get(`/consultations/status/${status}`),
  updateStatus: (consultationId, status) => 
    api.put(`/consultations/${consultationId}/status`, { status }),
};

// Home Visit API
export const homeVisitAPI = {
  create: (data) => api.post('/home-visits', data),
  getAll: () => api.get('/home-visits'),
  getByStatus: (status) => api.get(`/home-visits/status/${status}`),
};

// Support Callback API
export const supportAPI = {
  create: (data) => api.post('/support/callbacks', data),
  getAll: () => api.get('/support/callbacks'),
};

export default api;
