<template>
  <div class="app-block__title">
    这是sample页面
    <van-cell-group>
      <van-cell title="参数 p1" :value="p1" label="来自调用页面" />
      <van-cell title="参数 p2" :value="p2" label="来自调用页面" />
      <van-field label="参数 m1" v-model="m1" placeholder="准备传回调用页面的参数 m1" />
      <van-field label="参数 m2" v-model="m2" placeholder="准备传回调用页面的参数 m2" />
    </van-cell-group>
    <div style="margin-top: 20px;">
      <van-button @click="goBack" style="margin-right: 10px;">返回</van-button>
      <van-button @click="passMessageBack" type="primary">提 交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  eipPage () {
    return {
      title: "样例页面",
      beforeGoBack (done) {
        console.log('beforeGoBack')
        if (this.m2 !== undefined) {
          done(true)
        } else {
          this.$dialog.alert({message: "请清空 '参数 m2' 中的数据"}).then(_ => { done(false) })
        }
      }
    }
  },
  props: ["p1", "p2"],
  data() {
    return {
      m1: "123",
      m2: ""
    };
  },
  methods: {
    passMessageBack() {
      console.log("将本页面的处理结果传回调用页面");
      this.success({ m1: this.m1, m2: this.m2 });
    }
  }
};
</script>

<style scoped>
</style>
