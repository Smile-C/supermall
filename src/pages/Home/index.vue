<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <ReCommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(item,index) in bannerList" :key="item.id" :list="item"/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import ReCommend from "@/pages/Home/ReCommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

import {mapState} from "vuex";

export default {
  name: "index",
  computed: {
    ...mapState({
      bannerList: state => state.Home.FloorList
    })
  },
  components: {
    ListContainer, ReCommend, Rank, Like, Floor, Brand
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  }

}
</script>

<style scoped>

</style>
