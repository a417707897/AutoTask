<template>
  <div>
    <el-table :data="tdata" style="width: 100%" height="250">
      <el-table-column fixed prop="timerName" label="自动任务名称" width="150"/>
      <el-table-column prop="timerDesc" label="自动任务说明" width="120" />
      <el-table-column prop="cron" label="cron表达式" width="120" />
      <el-table-column prop="group" label="分组" width="120" />
      <el-table-column prop="jobClass" label="自动任务class" width="300" />
      <el-table-column prop="status" label="启动状态" width="120" />
      <el-table-column prop="isRunning" label="运行状态" width="120" />
      <el-table-column  label="操作"  width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">关闭</el-button>
      </template>
    </el-table-column>
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
        url: `http://127.0.0.1:8080/timer/task/jobDetails`,
        method: "get", //指定请求方式
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      this.$api(request).then(function (response) {

        for (var item of response.data.data.items) {
            item['status']=item['status']==1?"已启动":"未启动"
            item['isRunning']=item['isRunning']==1?"正在运行":"未运行"
        }
        console.log(response.data.data.items);

        _this.tdata=response.data.data.items;
      });
  },

};
</script>

<style>
</style>
