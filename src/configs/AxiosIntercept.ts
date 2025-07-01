import httpClient from './AxiosConfig'
import AuthService from '../services/AuthService'

let isRefreshing = false;
let failedQueue: Array<() => void> = [];

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite loops
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push(() => {
            originalRequest.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
            resolve(httpClient(originalRequest));
          });
        });
      }

      isRefreshing = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await AuthService.refreshtoken(refreshToken!);

        const newAccessToken = response.data.accessToken;
        localStorage.setItem('accessToken', newAccessToken);

        // Retry all failed requests
        failedQueue.forEach(cb => cb());
        failedQueue = [];

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return httpClient(originalRequest);
      } catch (err) {
        // Clear invalid tokens
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
