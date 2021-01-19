<template>
  <div>
    <el-table :data="tableData" style="width: 100%" height="250">
      <el-table-column
        fixed
        prop="timerName"
        label="自动任务名称"
        width="150"
      />
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
      tableData: [] 
    }
  },
  method(){
    this.demo();
  },
  methods: {
    demo() {
      //请求实体
      const request = {
        url: `http://localhost:8080/timer/task/jobDetails`,
        method: "get", //指定请求方式
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      this.$api(request, (err, resp, data) => {
        debugger;
        console.log(data);
      });
    },
  },
};
</script>

<style>
</style>
