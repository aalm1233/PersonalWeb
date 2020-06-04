<template>
  <div class="mod-user">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-row align="middle" justify="center">
        <el-col :span="20">
          <el-col :span="6">
            <el-form-item label="员工账号">
              <el-input size="mini" v-model="dataForm.userName" placeholder="员工账号" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-col>
        <el-col :span="4" style="text-align: right">
          <el-button size="mini" @click="getDataList()">查询</el-button>
          <el-button
            size="mini"
            v-if="isAuth('sys:user:save')"
            type="primary"
            @click="addOrUpdateHandle()"
          >新增</el-button>
          <el-button
            size="mini"
            v-if="isAuth('sys:user:delete')"
            type="danger"
            @click="deleteHandle()"
            :disabled="dataListSelections.length <= 0"
          >批量删除</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      :data="dataList"
      border
      :height="tableHeight"
      v-loading="dataListLoading"
      @selection-change="selectionChangeHandle"
      style="width: 100%;margin-top: 10px;"
    >
      <el-table-column type="selection" header-align="center" align="center" width="50"></el-table-column>
      <el-table-column
        prop="userId"
        :show-overflow-tooltip="true"
        header-align="center"
        align="center"
        width="150"
        label="员工编号"
      ></el-table-column>
      <el-table-column prop="username" header-align="center" align="center" label="员工账号"></el-table-column>
      <!-- <el-table-column
        prop="workName"
        :show-overflow-tooltip="true"
        header-align="center"
        align="center"
        label="工种">
         <template slot-scope="scope">
          <span>{{ splicing(scope.row.workName) }}</span>
        </template>
      </el-table-column>-->
      <el-table-column
        prop="roleName"
        :show-overflow-tooltip="true"
        header-align="center"
        align="center"
        label="角色"
      >
        <template slot-scope="scope">
          <span>{{ splicing(scope.row.roleName) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="orgName"
        :show-overflow-tooltip="true"
        header-align="center"
        align="center"
        label="所属组别"
      >
        <template slot-scope="scope">
          <span>{{ splicing(scope.row.orgName) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="mobile" header-align="center" align="center" label="手机号"></el-table-column>
      <el-table-column prop="status" header-align="center" align="center" label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === 0" size="small" type="danger">禁用</el-tag>
          <el-tag v-else size="small">正常</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" header-align="center" align="center" width="150" label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="isAuth('sys:user:update')"
            type="text"
            size="small"
            @click="addOrUpdateHandle(scope.row.userId)"
          >修改</el-button>
          <el-button
            v-if="isAuth('sys:user:delete')"
            type="text"
            size="small"
            @click="deleteHandle(scope.row.userId)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="text-align:center"
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
  </div>
</template>

<script>
import AddOrUpdate from "./user-add-or-update";
export default {
  data() {
    return {
      dataForm: {
        userName: ""
      },
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false,
      tableHeight:window.innerHeight -280
    };
  },
  components: {
    AddOrUpdate
  },
  activated() {
    this.getDataList();
  },
  methods: {
    //截取工种，角色，组别
    splicing(value) {
      let name = "";
      if (value != "" && value != null) {
        name = value.substring(0, value.lastIndexOf(","));
      }
      return name;
    },
    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      this.$http({
        url: this.$http.adornUrl("/sys/user/list"),
        method: "get",
        params: this.$http.adornParams({
          page: this.pageIndex,
          limit: this.pageSize,
          username: this.dataForm.userName
        })
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.dataList = data.page.list;
          this.totalPage = data.page.totalCount;
        } else {
          this.dataList = [];
          this.totalPage = 0;
        }
        this.dataListLoading = false;
      });
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandle(val) {
      this.dataListSelections = val;
    },
    // 新增 / 修改
    addOrUpdateHandle(id) {
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id);
      });
    },
    // 删除
    deleteHandle(id) {
      var userIds = id
        ? [id]
        : this.dataListSelections.map(item => {
            return item.userId;
          });
      this.$confirm(
        `确定对[id=${userIds.join(",")}]进行[${id ? "删除" : "批量删除"}]操作?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.$http({
            url: this.$http.adornUrl("/sys/user/delete"),
            method: "post",
            data: this.$http.adornData(userIds, false)
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.getDataList();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        })
        .catch(() => {});
    }
  }
};
</script>
