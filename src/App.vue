<template>
  <div id="app">
    <el-container style="height: 652px; border: 1px solid #121313">
        <el-aside style="width: 250px; height: 100%">
          <!--引入自定义左侧菜单栏-->
          <leftNav></leftNav>
        </el-aside>
        <el-main>
          <!--引入跳转路由-->
          <router-view></router-view>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import LeftNav from '@/components/home/leftNav'

export default {
  name: "App",
  components: {
    LeftNav
  }
}
</script>

<style>
</style>