import axios from "axios";

export const publicApi = axios.create({
  baseURL: 'https://localhost:5001/api',
  headers: { 'Content-Type': 'application/json' },
});

export const privateApi = axios.create({
  baseURL: 'https://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // prevent infinite loop
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token: any) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return privateApi(originalRequest);
          })
          .catch(Promise.reject);
      }

      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');

        const response = await axios.post('https://5001/api/auth/refresh-token', {
          refreshToken,
        });

        const newAccessToken = response.data.accessToken;
        localStorage.setItem('accessToken', newAccessToken);

        privateApi.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        processQueue(null, newAccessToken);
        return privateApi(originalRequest);
      } catch (err) {
        processQueue(err, null);
        // Optional: logout user
        localStorage.clear();
        window.location.href = '/login';
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
