import axios, { AxiosInstance } from 'axios';
import store from '../store/store';
const baseUrl = 'https://accelerist.herokuapp.com/api/v1/';
/* const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYjg5M2IwZS1jZTI4LTQzOTItYTgyNC00YTNmZjljMzZlNzkiLCJhdWQiOiJhdXRoIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaWF0IjoxNjMwMzAzMDU2LCJleHAiOjE2MzI4OTUwNTZ9.TQA2y1-fd_x4OQVZbhc3bLBMczXkMMzZuxvimGHxbt8';
 */
class Api {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use((config) => {
      const token = store.getState().user.token;
      if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  async post(url: string, data?: any) {
    return this.api.post(url, data);
  }

  async get(url: string, data?: any) {
    return this.api.get(url, data);
  }

  async put(url: string, data?: any) {
    return this.api.put(url, data);
  }

  async delete(url: string, data?: any) {
    return this.api.delete(url, data);
  }
}

export default new Api();
