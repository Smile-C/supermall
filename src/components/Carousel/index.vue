<template>

  <!--banner轮播-->
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in Clist" :key="item.id">
        <img :src="item.imgUrl"/>
      </div>
    </div>


    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper"

export default {
  name: "Carousel",
  props: ['Clist'],
  watch: {
    Clist: {
      immediate: true,
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          new Swiper(this.$refs.mySwiper, {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true//点击小球的时候切换轮播图
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
