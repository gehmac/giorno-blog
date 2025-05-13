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

    return response.data ?? undefined;
  }
}
