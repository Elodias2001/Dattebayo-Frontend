// stores/students.js
import Api from "@/utils/api";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    items: [],
    errors: [],
  }),
  actions: {
    // Récupérer tous les posts
    async getAllPosts() {
      try {
        const data = await Api.get("/posts");
        this.items = data.data.posts;
        console.log("posts", this.items);
        return this.items;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
});
