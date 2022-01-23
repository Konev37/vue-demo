<template>
  <div>
    <h1>test1</h1>
    <div class="box" @click="toTest2()">跳转并传参到test2</div>
  </div>
</template>

<script>
  export default {
    name: "test1",
    methods:{
      toTest2() {
        this.$router.push({
          path:'/test/test2',
          query:{     //query 传参，地址栏会显示参数
            admin:'陈文博'
          },
          name:'test2',
          params:{    //params 传参，地址栏不会显示参数
            password:'123456'
          }
        })
      }
    }
  }
</script>

<style scoped>
  .box{
    width: 200px;
    height: 60px;
    background-color: rgb(160, 216, 104,0.8);
    text-align: center;
    line-height: 60px;
    margin: 0 500px;
  }
</style>