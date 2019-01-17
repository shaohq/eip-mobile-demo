<template>
  <div>
    <div class="app-block__title">
      首页
    </div>
    <div style="margin-top: 20px;">
      <van-cell-group>
        <van-field label="参数 p1" v-model="p1" placeholder="准备传给被调用页面的参数 1" />
        <van-field label="参数 p2" v-model="p2" placeholder="准备传给被调用页面的参数 2" />
      </van-cell-group>
    </div>
    <div style="margin-top: 20px;">
      <van-button type="primary" size="large" @click="openSamplePage">打开样例页面</van-button>
    </div>
    <div v-if="m1" style="margin-top: 20px;">
      <van-cell-group>
        <van-cell title="参数 m1" :value="m1" label="从被调用页面传回的参数 1" />
        <van-cell title="参数 m2" :value="m2" label="从被调用页面传回的参数 2" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p1: '',
      p2: '',
      m1: undefined,
      m2: undefined
    };
  },
  methods: {
    openSamplePage () {
      let _this = this
      _this.$openPage('app', '/sample/SamplePage', {p1: _this.p1, p2: _this.p2})
        .then(({m1, m2}) => {
          _this.m1 = m1
          _this.m2 = m2
        }).catch(error => {
          console.log("被调用页面未提交，直接返回", error)
        })
    }
  }
};
</script>

<style scoped>
</style>
