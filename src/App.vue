<template>
  <div id="app" style="height: 100%;">
    <div class="navigation">
      <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <!-- openeds默认打开哪个导航 -->
          <el-menu
            @open="handleOpen"
            @close="handleClose"
            background-color="#4682B4"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            :default-openeds="['1']"
          >
            <!-- submenu导航栏 -->
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-s-order"></i>自动任务</template
              >
              <el-menu-item-group>
                <el-menu-item index="jdAutoTask">京东自动任务</el-menu-item>
                <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
              </el-menu-item-group>
            </el-submenu>
            <!-- 配置管理 -->
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-document"></i>配置管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="2-1">定时器管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 用户管理 -->
            <el-submenu index="3">
              <template slot="title"
                ><i class="el-icon-s-custom"></i>用户管理</template
              >
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </el-header>

          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },

  methods: {
    handleOpen() {
      console.log("开启了");
    },
    handleClose() {
      console.log("关闭了");
    },
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
