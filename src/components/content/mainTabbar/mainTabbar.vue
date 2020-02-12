<template>
  <div id="mainTabbar">
      <router-view></router-view>
      <Tabbar>
        <TabbarItem path="/home" >
          <img src="@/assets/img/tabbar/lihe.svg" alt="" slot="item-img">
          <img src="@/assets/img/tabbar/lihe-active.svg" alt="" slot="item-img-active">
          <div slot="item-title">首页</div>
        </TabbarItem>
      <TabbarItem path="/cart" >
          <img src="@/assets/img/tabbar/mima.svg" alt="" slot="item-img">
          <img src="@/assets/img/tabbar/mima-active.svg" alt="" slot="item-img-active">
          <div slot="item-title">购物车</div>
        </TabbarItem>
        <TabbarItem path="/category" >
          <img src="@/assets/img/tabbar/nan.svg" alt="" slot="item-img">
          <img src="@/assets/img/tabbar/nan-active.svg" alt="" slot="item-img-active">
          <div slot="item-title">分类</div>
        </TabbarItem>
        <TabbarItem path="/profile" >
          <img src="~assets/img/tabbar/nv.svg" alt="" slot="item-img">
          <img src="@/assets/img/tabbar/nv-active.svg" alt="" slot="item-img-active">
          <div slot="item-title">我的</div>
        </TabbarItem>
      </Tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/tabbar/Tabber'
import TabbarItem from 'components/common/tabbar/tabbaritem/TabbarItem'

export default {
  name: 'MainTabbar',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
  
</style>