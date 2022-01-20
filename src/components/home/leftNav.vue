<template>
  <div>
    <el-row>
      <el-col>
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#E9EEF3"
            text-color="black"
            router
            style="height: 650px">
          <!--    HelloWorld    -->
          <el-menu-item index="/hello" style="text-align: left">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>HelloWorld</span>
            </template>
          </el-menu-item>
          <!--    Test    -->
          <el-submenu index="/test" style="text-align: left">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>Test</span>
            </template>
            <!--test1-->
            <el-menu-item index="/test/test1">
              <span slot="title">test1</span>
            </el-menu-item>
            <!--test2-->
            <el-menu-item index="/test/test2">
              <span slot="title">test2</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.el-menu-vertical-demo{
  height: 645px
}
</style>

<script>
export default {
  name: 'LeftMenu',
};
</script>