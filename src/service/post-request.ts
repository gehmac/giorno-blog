import { AxiosResponse } from "axios";
import api, { retryRequest } from "./api";
import { Post } from "./post-type";

export default class PostService {
  static async getPostInfo(slug: string): Promise<undefined | Post> {
    const response = await retryRequest(
      () => api.get<AxiosResponse<Post>>(`/post/${slug}`),
      3,
      5000
    );

    if (response.status !== 200) {
      console.error("Error fetching post info:", response.statusText);
      return undefined;
    }

    return response.data ?? undefined;
  }
}
