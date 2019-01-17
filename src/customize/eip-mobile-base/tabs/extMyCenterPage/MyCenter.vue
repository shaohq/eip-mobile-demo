<template>
  <div>
    <div class="app-block__title">
      第四个首层页面
    </div>
    <van-cell title="版本信息" is-link value="查看版本信息" @click="$openPage('app', '/version/VersionPage')" />
    <div class="app-block__title">当前登录用户的信息</div>
    <div class="app-block__content">
      {{user}}
    </div>
    <div style="margin-top: 20px">
      <van-button type="danger" size="large" @click="logout">退 出</van-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>

<style scoped>
</style>
