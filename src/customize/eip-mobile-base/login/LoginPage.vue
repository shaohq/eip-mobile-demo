<template>
  <div>
    <div class="app-block__title">登录页面</div>
    <div class="app-block__content">
      <van-field ref="username" v-model="form.username" label="用户名" placeholder="请输入用户名" @keyup.enter.native="$refs.password.focus()"></van-field>
      <van-field ref="password" v-model="form.password" label="密码" placeholder="请输入密码" @keyup.enter.native="login"></van-field>
      <van-button type="primary" size="large" style="margin-top: 20px;" @click="login">登 录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  eipPage() {
    return {
      title: "登录页"
    }
  },
  data() {
    return {
      form: {
        username: undefined,
        password: undefined
      }
    };
  },
  mounted() {
    this.$refs.username.focus()
  },
  methods: {
    login() {
      if (this.form.password === "123") {
        this.success({
          user: {
            userName: this.form.username,
            id: this.form.username,
            otherInfo: this.form.password
            // imAccount: "pu_1",
            // imToken: "e83b463976343606339b6f7c77e3aa50"
          },
          jwtToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        });
      } else {
        this.$notify({message: '请输入密码123', duration: 3000})
      }
    }
  }
};
</script>

<style scoped>
</style>
