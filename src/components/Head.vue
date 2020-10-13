<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']"  router>
          <div v-for="(item , i) in list" :key="i">
          <el-submenu :index="i">
            <template slot="title">
              <i :class="item.icon"></i>{{item.name}}
            </template>
            <el-menu-item :index="item.router">选项1</el-menu-item>
          </el-submenu>
          </div>
        </el-menu>
      </el-aside>

      <el-container>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
          {
              name:"语文",
              icon:"el-icon-message",
              router:"/table"
          }, 
          {
              name:"数学",
              icon:"el-icon-menu",
              router:"/test"
          }, 
          {
              name:"英语",
              icon:"el-icon-food",
              router:""
          }]
    };
  }
};
</script>
