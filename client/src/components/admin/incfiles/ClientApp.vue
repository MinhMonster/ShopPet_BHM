<template>
  <div class="client">
    <section id="client" class="text-white">
      <div v-if="this.client.login == 'online'" class="flex-row-space-between-center">
        <h1>Xin chào: {{ client.username }}</h1>
        <button class="btn btn-danger mgl-20px" @click="logoutUser">Logout</button>
      </div>
      <div v-if="this.client.login == 'offline'" class="flex-row-end">
        <button herf="/login" class="btn btn-primary" @click="logoutUser">Login</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      name: "",
      username: "",
      email: "",
      password: "",
      client: {
        email: localStorage.getItem("email"),
        token: localStorage.getItem("token"),
        username: "",
        login: localStorage.getItem("login"),
      },
    };
  },

  created() {
    // this.checkUser();
  },
  mounted() {
    console.log(this);
    this.checkUser();
  },
  computed: {
    // ...mapper.mapState(["product", "products"]),
  },

  methods: {
    // ...mapper.mapActions(["click", "fetchProducts"]),

    logoutUser() {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.setItem("login", "offline");
      // this.$router.push({ name: "users.login" });
      window.location.href = "/admin/login";
    },
    async checkUser() {
      await this.$request
        .post("http://localhost:8000/api/client", {
          email: this.$store.state.user.email,
        })
        .then((res) => {
          if (!res.data.success) {
            localStorage.setItem("login", "offline");
            window.location.href = "/admin/login";
          }

          if (res.data.success) {
            // localStorage.setItem("login", "online");
            this.client.username = res.data.user.username;
            this.client.password = res.data.user.password;
            localStorage.setItem("login", "online");
          }
        });
    },
  },
  computed: {},
};
</script>
