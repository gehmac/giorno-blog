import api, { retryRequest } from "./api";
import { Post } from "./post-type";

export default class PostService {
  static async getPostInfo(slug: string): Promise<Post> {
    const response = await retryRequest(
      () => api.get(`/post/${slug}`),
      3,
      5000
    );
    return response.data as Post;
  }
}
