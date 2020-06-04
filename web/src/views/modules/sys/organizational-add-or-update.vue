<template>
  <el-dialog
    :title="!dataForm.show ? '新增组织架构' : '修改组织架构'"
    :close-on-click-modal="false"
    width="60%"
    :visible.sync="visible"
    class="org-select"
  >
    <el-form
      :model="dataForm"
      :rules="dataRule"
      ref="dataForm"
      @keyup.enter.native="dataFormSubmit()"
      label-width="100px"
    >
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="上级组织" prop="parentName">
            <el-popover ref="menuListPopover" placement="bottom-start" trigger="click">
              <el-tree
                :data="menuList"
                :props="menuListTreeProps"
                node-key="menuId"
                ref="menuListTree"
                @current-change="menuListTreeCurrentChangeHandle"
                :highlight-current="true"
                :expand-on-click-node="false"
              ></el-tree>
            </el-popover>
            <el-input
              v-model="dataForm.parentName"
              v-popover:menuListPopover
              :readonly="true"
              placeholder="点击选择上级菜单"
              class="menu-list__input"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="组织名称" prop="name">
            <el-input v-model="dataForm.name" placeholder="请输入组织名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="组织联系人" prop="legalPerson">
            <el-input v-model="dataForm.legalPerson" placeholder="请输出组织联系人"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="联系人电话" prop="phone">
            <el-input v-model="dataForm.phone" placeholder="请输入联系人电话"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="组织状态" prop="flag">
            <el-select v-model="dataForm.flag" placeholder="请选择">
              <el-option
                v-for="item in statusList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="备注">
            <el-input placeholder="备注" v-model="dataForm.remark"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
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
      menuList: [], //组织
      menuListTreeProps: {
        label: "name",
        children: "children"
      },
      //组织状态
      statusList: [
        {
          value: "1",
          label: "启用"
        },
        {
          value: "0",
          label: "停用"
        }
      ],
      visible: false,
      dataForm: {
        show: 0,
        menuId: 1,
        parentId: 0,
        parentName: "",
        name: "",
        phone: "",
        legalPerson: "",
        flag: "1",
        remark: ""
      },
      dataRule: {
        parentName: [
          { required: true, message: "顶级组织不能为空", trigger: "change" }
        ],
        name: [
          { required: true, message: "组织名称不能为空", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    init(id) {
      this.dataForm.id = id || 0;
      this.dataForm.show = id || 0;
      this.$http({
        url: this.$http.adornUrl("/sys/org/selectOrg"),
        method: "get",
        params: this.$http.adornParams()
      })
        .then(({ data }) => {
          this.menuList = treeDataTranslate(data.menuList, "menuId");
        })
        .then(() => {
          this.visible = true;
          this.$nextTick(() => {
            this.$refs["dataForm"].resetFields();
          });
        })
        .then(() => {
          if (this.dataForm.id == 0) {
            // 新增
            this.menuListTreeSetCurrentNode();
          } else {
            // 修改
            this.$http({
              url: this.$http.adornUrl(`/sys/org/orgInfo/${this.dataForm.id}`),
              method: "get",
              params: this.$http.adornParams()
            }).then(({ data }) => {
              this.dataForm.id = data.org.orgId;
              this.dataForm.name = data.org.name;
              this.dataForm.legalPerson = data.org.legalPerson;
              this.dataForm.phone = data.org.phone;
              if (data.org.flag == 1) {
                this.dataForm.flag = "1";
              } else {
                this.dataForm.flag = "0";
              }
              this.dataForm.remark = data.org.remark;
              this.dataForm.parentId = data.org.parentId;
              this.menuListTreeSetCurrentNode();
            });
          }
        });
    },
    // 菜单树选中
    menuListTreeCurrentChangeHandle(data, node) {
      this.dataForm.parentId = data.menuId;
      this.dataForm.parentName = data.name;
    },
    // 菜单树设置当前选中节点
    menuListTreeSetCurrentNode() {
      this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId);
      this.dataForm.parentName = (this.$refs.menuListTree.getCurrentNode() ||
        {})["name"];
    },
    // 表单提交
    dataFormSubmit() {
      this.$refs["dataForm"].validate(valid => {
        if (this.dataForm.legalPerson == "") {
          this.dataForm.legalPerson = " ";
        }
        if (this.dataForm.phone == "") {
          this.dataForm.phone = " ";
        }
        if (this.dataForm.remark == "") {
          this.dataForm.remark = " ";
        }
        if (valid) {
          if (!this.dataForm.show) {
            this.visible = false;
            this.$http({
              url: this.$http.adornUrl(`/sys/org/saveOrganization/`),
              method: "post",
              data: this.$http.adornData({
                type: this.dataForm.type,
                name: this.dataForm.name,
                parentId: this.dataForm.parentId,
                legalPerson: this.dataForm.legalPerson,
                phone: this.dataForm.phone,
                flag: this.dataForm.flag,
                remark: this.dataForm.remark
              })
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.$message({
                  message: "操作成功",
                  type: "success",
                  duration: 1500,
                  onClose: () => {
                    this.$emit("refresh");
                  }
                });
              } else {
                this.$message.error(data.msg);
              }
            });
          } else {
            //编辑
            this.$http({
              url: this.$http.adornUrl(`/sys/org/updateOrg/`),
              method: "post",
              data: this.$http.adornData({
                orgId: this.dataForm.id,
                type: this.dataForm.type,
                name: this.dataForm.name,
                parentId: this.dataForm.parentId,
                legalPerson: this.dataForm.legalPerson,
                phone: this.dataForm.phone,
                flag: this.dataForm.flag,
                remark: this.dataForm.remark
              })
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.$message({
                  message: "操作成功",
                  type: "success",
                  duration: 1500,
                  onClose: () => {
                    this.visible = false;
                    this.$emit("refresh");
                  }
                });
              } else {
                this.$message.error(data.msg);
              }
            });
          }
        }
      });
    }
  }
};
</script>
