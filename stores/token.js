export const useTokenStore = defineStore("token", {
  state: () => ({
    token: null,
    loggedIn: false,
  }),
  persist: true,
  getters: {
    getToken: (state) => state.token,
    getStatus: (state) => state.loggedIn,
  },
  actions: {
    setToken(token) {
      this.token = token;
      this.loggedIn = true;
    },

    async removeToken() {
      const localePath = useLocalePath();
      const auth = useAuthStore();
      await auth.$reset(); // Je reset les donnees persister par le useAuthStore notamment a travers la variable user
      await this.$reset(); // Je reset les donnees persister par le useTokenStore a travers les variables token et loggedIn
      // return navigateTo(localePath("/auth/login")); //Redirection page login
    },
  },
});
