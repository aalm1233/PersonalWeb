<template>
  <div>
    <el-button type="primary" @click="addOrUpdateHandle()">新建</el-button>
    <el-table :data="tableData" row-key="id" border v-loading="dataListLoading">
      <el-table-column type="index"></el-table-column>
      <table-tree-column prop="name" treeKey="orgId" min-width="15%" label="组织机构层级"></table-tree-column>
      <el-table-column
        prop="legalPerson"
        header-align="center"
        align="center"
        min-width="10%"
        label="组织联系人"
      ></el-table-column>
      <el-table-column
        prop="phone"
        header-align="center"
        align="center"
        min-width="15%"
        label="联系人电话"
      ></el-table-column>
      <!-- <el-table-column
			  prop="code"
			  header-align="center"
			  align="center"
			 min-width="10%"
			  label="组织编码">
      </el-table-column>-->
      <el-table-column prop="flag" header-align="center" align="center" min-width="10%" label="状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.flag === 0" size="small" type="danger">停用</el-tag>
          <el-tag v-else size="small">正常</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="remark"
        header-align="center"
        align="center"
        min-width="20%"
        label="备注"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.remark === null">--</span>
          <span v-else>{{ scope.row.remark }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="operation" fixed="right" min-width="10%" label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="isAuth('sys:user:update')"
            type="text"
            size="small"
            @click="addOrUpdateHandle(scope.row.orgId)"
          >编辑</el-button>
          <el-popover trigger="hover" placement="bottom" width="50">
            <div>
              <el-button
                v-if="isAuth('sys:user:delete')"
                type="text"
                size="small"
                @click="deleteHandle(scope.row.orgId)"
              >删除</el-button>
            </div>
            <div>
              <el-button
                v-if="scope.row.flag == 1"
                type="text"
                size="small"
                @click="disable(scope.row.orgId,0)"
              >停用</el-button>
              <el-button v-else type="text" size="small" @click="disable(scope.row.orgId,1)">正常</el-button>
            </div>
            <el-button slot="reference" type="text" size="small">
              更多
              <i class="el-icon-tran el-icon-arrow-down"></i>
            </el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      style="text-align:center"
      background
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>

    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refresh="refresh"></add-or-update>
  </div>
</template>

<script>
import TableTreeColumn from "@/components/table-tree-column";
import AddOrUpdate from "./organizational-add-or-update";
import { treeDataTranslate } from "@/utils";
export default {
  name: "organizational-table",
  components: {
    TableTreeColumn,
    AddOrUpdate
  },
  data() {
    return {
      tableData: [
        {
          code: null,
          createTime: "2019-08-06 09:53:10",
          dicList: null,
          flag: 1,
          legalPerson: " ",
          menuId: null,
          name: "泰美克测试",
          open: true,
          orgId: 1,
          parentId: 0,
          parentName: null,
          phone: " ",
          remark: " ",
          typeCode: null,
          typeName: null
        },
        {
          code: null,
          createTime: "2019-08-06 09:53:27",
          dicList: null,
          flag: 1,
          legalPerson: " ",
          menuId: null,
          name: "泰美克1",
          open: true,
          orgId: 2,
          parentId: 0,
          parentName: null,
          phone: " ",
          remark: " ",
          typeCode: null,
          typeName: null
        },
        {
          code: null,
          createTime: "2019-08-06 09:56:13",
          dicList: null,
          flag: 1,
          legalPerson: " ",
          menuId: null,
          name: "泰美克测试1",
          open: true,
          orgId: 10,
          parentId: 2,
          parentName: null,
          phone: " ",
          remark: " ",
          typeCode: null,
          typeName: null
        }
      ],
      addOrUpdateVisible: false,
      dataListLoading: false,
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataForm: {
        organizationalName: "",
        organizationalLevel: "",
        classifications: "",
        organizationalContact: "",
        phone: "",
        organizationCode: "",
        status: "",
        remark: ""
      }
    };
  },
  activated() {},
  methods: {
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
    addOrUpdateHandle(id) {
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id);
      });
    },
    menuListTreeSetCurrentNode() {
      this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId);
      this.dataForm.parentName = (this.$refs.menuListTree.getCurrentNode() ||
        {})["name"];
    },

    //禁用
    disable(orgId, status) {
      this.$http({
        url: this.$http.adornUrl(`/sys/org/updateOrg/`),
        method: "post",
        data: this.$http.adornData({
          orgId: orgId,
          flag: status
        })
      }).then(({ data }) => {
        if (data && data.code === 0) {
          if (status == 0) {
            this.$message({
              message: "已停用该项",
              type: "success"
            });
          } else {
            this.$message({
              message: "已启用该项",
              type: "success"
            });
          }
          this.getDataList();
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    //父级刷新table数据
    refresh() {
      this.getDataList();
    },
    //删除组织
    deleteHandle(orgId) {
      this.$confirm(`你确定要删除吗?可能会影响正在使用账号哦!`, "删除提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消"
      })
        .then(() => {
          this.$http({
            url: this.$http.adornUrl(`/sys/org/deleteOrg/${orgId}`),
            method: "post",
            params: this.$http.adornParams()
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

<style lang="scss">
.org-select .el-cascader--medium,
.el-select {
  width: 100% !important;
}
</style>
