import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export default api;

export async function retryRequest<T>(
  fn: () => Promise<AxiosResponse<T>>,
  retries: number = 3,
  delay: number = 2000
): Promise<T> {
  let error: unknown;
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fn();
      return response.data;
    } catch (err) {
      error = err;
      console.log(`Attempt ${i + 1} failed, retrying...`);
      if (i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw error;
}
