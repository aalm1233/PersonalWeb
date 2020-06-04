<template>
  <el-dialog
    :title="!dataForm.id ? '新建角色' : '编辑角色'"
    :close-on-click-modal="false"
    :visible.sync="visible"
    class="role-select"
  >
    <el-form
      :model="dataForm"
      :rules="dataRule"
      ref="dataForm"
      @keyup.enter.native="dataFormSubmit()"
      label-width="80px"
    >
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="角色名称" prop="roleName">
            <el-input v-model="dataForm.roleName" placeholder="角色名称" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="所属组别" prop="parentName">
            <el-popover ref="menuListPopovers" placement="bottom-start" trigger="click">
              <el-tree
                :data="menuListorg"
                :props="menuListTreeProps"
                node-key="menuId"
                ref="menuListTreegroup"
                @current-change="menuListTreeCurrentChangeHandle"
                :highlight-current="true"
                :expand-on-click-node="false"
              ></el-tree>
            </el-popover>
            <el-input
              v-model="dataForm.parentName"
              v-popover:menuListPopovers
              :readonly="true"
              placeholder="所属组别"
              class="menu-list__input"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="角色描述" prop="remark">
            <el-input v-model="dataForm.remark" placeholder="角色描述"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="权限状态" prop="flag" label-width="120">
            <el-radio v-model="dataForm.flag" label="1">启用</el-radio>
            <el-radio v-model="dataForm.flag" label="0">停用</el-radio>
          </el-form-item>
        </el-col>
      </el-row>

      <el-tabs v-model="activeName">
        <el-tab-pane label="功能权限配置" name="functionaccess">
          <el-form-item size="mini">
            <el-tree
              :data="menuList"
              :props="menuListTreeProps"
              node-key="menuId"
              ref="menuListTree"
              show-checkbox
            ></el-tree>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="visible = false">取消</el-button>
      <el-button size="mini" type="primary" @click="dataFormSubmit()">保存</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { treeDataTranslate } from "@/utils";
export default {
  data() {
    return {
      visible: false,
      menuListorg: [], //所属组别
      menuList: [], //菜单权限
      activeName: "functionaccess",
      menuListTreeProps: {
        label: "name",
        children: "children"
      },
      orgLableCode: "", //组织机构id或name
      orgNamedataLable: "", //数据组织机构id或name
      dataForm: {
        id: 0, //title显示新增还是修改
        roleName: "", //角色名称
        orgId: "", //所属机构id
        orgName: "", //所属机构name
        remark: "", //角色描述
        flag: "1", //数据权限-权限状态
        parentId: 0,
        parentName: ""
      },
      dataRule: {
        roleName: [
          { required: true, message: "角色名称不能为空", trigger: "blur" }
        ],
        parentName: [
          { required: true, message: "所属组别不能为空", trigger: "change" }
        ],
        flag: [{ required: true, message: "权限状态不能为空", trigger: "blur" }]
      },
      tempKey: -666666 // 临时key, 用于解决tree半选中状态项不能传给后台接口问题. # 待优化
    };
  },
  mounted() {
    this.getmenulist();
  },
  activated() {
    this.getmenulist();
  },
  watch: {
    visible() {
      if (!this.visible) {
        this.$emit("close");
      }
    }
  },
  methods: {
    init(id) {
      this.dataForm.id = id || 0;
      this.$http({
        url: this.$http.adornUrl("/sys/menu/list"),
        method: "get",
        params: this.$http.adornParams()
      })
        .then(({ data }) => {
          this.menuList = treeDataTranslate(data, "menuId");
        })
        .then(() => {
          this.visible = true;
          this.$nextTick(() => {
            this.$refs["dataForm"].resetFields();
          });
        })
        .then(() => {
          if (this.dataForm.id) {
            this.$http({
              url: this.$http.adornUrl(`/sys/role/info/${this.dataForm.id}`),
              method: "get",
              params: this.$http.adornParams()
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.dataForm.roleName = data.role.roleName;
                this.dataForm.remark = data.role.remark;
                if (data.role.flag == 1) {
                  this.dataForm.flag = "1";
                } else {
                  this.dataForm.flag = "0";
                }
                //所属机构id list
                this.dataForm.orgId = data.role.orgId;
                //所属机构name list
                this.dataForm.orgName = data.role.orgName;
                this.dataForm.parentId = data.role.parentId;
                this.menuListTreeSetCurrentNode();
                var idx = data.role.menuIdList.indexOf(this.tempKey);
                if (idx !== -1) {
                  data.role.menuIdList.splice(
                    idx,
                    data.role.menuIdList.length - idx
                  );
                }
                this.$refs.menuListTree.setCheckedKeys(data.role.menuIdList);
              }
            });
          }
        });
    },
    //获取所属组别
    getmenulist() {
      this.$http({
        url: this.$http.adornUrl("/sys/role/selectRole"),
        method: "get",
        params: this.$http.adornParams()
      }).then(({ data }) => {
        this.menuListorg = treeDataTranslate(data.menuList, "menuId");
      });
    },
    //所属机构
    menuListTreeCurrentChangeHandle(data, node) {
      this.dataForm.parentId = data.menuId;
      this.dataForm.parentName = data.name;
    },
    // 菜单树设置当前选中节点
    menuListTreeSetCurrentNode() {
      this.$refs.menuListTreegroup.setCurrentKey(this.dataForm.parentId);
      this.dataForm.parentName = (this.$refs.menuListTreegroup.getCurrentNode() ||
        {})["name"];
    },
    // 表单提交
    dataFormSubmit() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.visible = false;
          this.$http({
            url: this.$http.adornUrl(
              `/sys/role/${!this.dataForm.id ? "save" : "update"}`
            ),
            method: "post",
            data: this.$http.adornData({
              roleId: this.dataForm.id || undefined,
              roleName: this.dataForm.roleName,
              remark: this.dataForm.remark,
              orgId: this.dataForm.orgId,
              parentId: this.dataForm.parentId,
              orgName: this.dataForm.orgName,
              flag: this.dataForm.flag,
              menuIdList: [].concat(
                this.$refs.menuListTree.getCheckedKeys(),
                [this.tempKey],
                this.$refs.menuListTree.getHalfCheckedKeys()
              )
            })
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.$emit("refreshDataList");
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    }
  }
};
</script>
<style>
/* .el-dialog{width: 55%;} */
.el-dialog__header {
  border: 1px solid #dddddd;
}
.el-tree {
  height: 250px;
  overflow-y: auto;
}
.role-select {
}
</style>
