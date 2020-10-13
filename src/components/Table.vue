<template>
  <div id="mytable">
    <template>
    <el-input v-model="search" placeholder="请输入内容"></el-input>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.date.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column label="Date" prop="date">
      </el-table-column>
      <el-table-column label="Name" prop="name">
      </el-table-column>
    </el-table>
  </template>
  <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: ''
    }
  }
}
</script>
