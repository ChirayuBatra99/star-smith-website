import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL, timeout: 12000 });

    this.client.interceptors.request.use((config) => {
      return config;
    });

    this.client.interceptors.response.use(
      (res) => res,
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  public async get<T>(url: string, config?: AxiosRequestConfig) {
    const res = await this.client.get<T>(url, config);
    return res.data;
  }

  public async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    const res = await this.client.post<T>(url, data, config);
    return res.data;
  }
}

export const api = new HttpClient(import.meta.env.VITE_API_BASE_URL || 'https://api.example.com');
