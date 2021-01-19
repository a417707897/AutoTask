<template>
  <div>
    <el-button type="primary" @click="demo">主要按钮</el-button>
    <el-table :data="tdata" style="width: 100%" height="250">
      <el-table-column fixed prop="timerName" label="自动任务名称" width="150"/>
      <el-table-column prop="timerDesc" label="自动任务说明" width="120" />
      <el-table-column prop="cron" label="cron表达式" width="120" />
      <el-table-column prop="group" label="分组" width="120" />
      <el-table-column prop="jobClass" label="自动任务class" width="300" />
      <el-table-column prop="status" label="状态" width="120" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AutoTask",
  data() {
    return {
      tdata: [],
    };
  },
  created:function(){
    let _this=this;
    //请求实体
      const request = {
        url: `http://120.92.145.112:8080/timer/task/jobDetails`,
        method: "get", //指定请求方式
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      this.$api(request).then(function (response) {
        console.log(response.data.data.items);
        _this.tdata=response.data.data.items;
      });
  },

};
</script>

<style>
</style>
