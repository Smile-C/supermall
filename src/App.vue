<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Fooder v-show="$route.meta.show"></Fooder>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Fooder from "@/components/Fooder";
import {mapState} from "vuex";

/**
 * 1、mapState 来自于vuex
 * 2、mapState本质上是一个函数
 * 3、这个函数的返回值是一个对象
 * 4、对象里面是一个方法
 */



export default {
  name: "index",
  methods: {},
  components: {
    Header, Fooder
  },
  mounted() {
    this.$store.dispatch('categoryList')
    this.$store.dispatch('getBannerList')
  }
}
</script>
<style lang="less">
</style>
