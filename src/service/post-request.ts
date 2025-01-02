import api from "./api";

export default class PostService {
  static async getPostInfo(slug: string): Promise<Post> {
    const response = await api.get(`/post/${slug}`);
    console.log(response.data.data);

    return response.data.data as Post;
  }
}

export type Post = {
  postId: string;
  body: string;
  classification: string;
  cardImage: string;
  title: string;
  description: string;
};
