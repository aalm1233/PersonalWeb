<template>
  <div class="mod-role">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-row align="middle" justify="center">
        <el-col :span="20">
          <el-col :span="6">
            <el-form-item label="角色名称">
              <el-input size="mini" v-model="dataForm.roleName" placeholder="角色名称" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-col>
        <el-col :span="4" style="text-align: right">
          <el-button size="mini" @click="getDataList()">查询</el-button>
          <el-button
            size="mini"
            v-if="isAuth('sys:role:save')"
            type="primary"
            @click="addOrUpdateHandle()"
          >新增</el-button>
        </el-col>
      </el-row>
    </el-form>

    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      @selection-change="selectionChangeHandle"
      style="width: 100%;margin-top: 10px;"
    >
      <!-- <el-table-column
       type="selection"
       align="center"
       width="50">
      </el-table-column>-->
      <table-tree-column prop="name" treeKey="menuId" min-width="15%" label="角色名称"></table-tree-column>
      <el-table-column prop="remark" header-align="center" align="center" label="角色表述"></el-table-column>
      <el-table-column
        prop="createTime"
        header-align="center"
        align="center"
        width="180"
        label="创建时间"
      ></el-table-column>
      <el-table-column prop="flag" header-align="center" align="center" min-width="10%" label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.flag === 0" size="small" type="danger">停用</el-tag>
          <el-tag v-else size="small">正常</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" header-align="center" align="center" width="150" label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="isAuth('sys:role:update')"
            type="text"
            size="small"
            @click="addOrUpdateHandle(scope.row.menuId)"
          >修改</el-button>
          <el-button
            v-if="isAuth('sys:role:delete')"
            type="text"
            size="small"
            @click="deleteHandle(scope.row.menuId)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update
      v-if="addOrUpdateVisible"
      @close="close"
      ref="addOrUpdate"
      @refreshDataList="getDataList"
    ></add-or-update>
  </div>
</template>

<script>
import TableTreeColumn from "@/components/table-tree-column";
import AddOrUpdate from "./role-add-or-update";
import { treeDataTranslate } from "@/utils";
export default {
  name: "role",
  components: {
    TableTreeColumn,
    AddOrUpdate
  },
  data() {
    return {
      dataForm: {
        roleName: ""
      },
      dataList: [],
      dataListLoading: false,
      dataListSelections: [],
      addOrUpdateVisible: false
    };
  },
  activated() {
    this.getDataList();
  },
  methods: {
    close() {
      // dialog遮罩层隐藏
      this.addOrUpdateVisible = false;
    },
    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      this.$http({
        url: this.$http.adornUrl("/sys/role/list"),
        method: "get",
        params: this.$http.adornParams({
          roleName: this.dataForm.roleName
        })
      }).then(({ data }) => {
        this.dataList = treeDataTranslate(data, "menuId");
        this.dataListLoading = false;
      });
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
      this.$confirm(`确定对[id=${id}]进行[删除]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http({
            url: this.$http.adornUrl(`/sys/role/delete/${id}`),
            method: "post",
            data: this.$http.adornData()
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
