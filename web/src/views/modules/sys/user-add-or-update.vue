<template>
  <el-dialog
    :title="!dataForm.id ? '新增人员' : '修改人员'"
    :close-on-click-modal="false"
    width="80%"
    :visible.sync="visible"
  >
    <el-form
      :model="dataForm"
      :rules="dataRule"
      ref="dataForm"
      @keyup.enter.native="dataFormSubmit()"
      label-width="80px"
    >
      <el-row :gutter="20">
        <!-- 左侧基本人员信息-->
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-row :gutter="20">
            <!-- <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="员工编号" prop="userId">
                <el-input v-model="dataForm.userId" placeholder="员工编号"></el-input>
              </el-form-item>
            </el-col>-->
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="用户名" prop="userName">
                <el-input v-model="dataForm.userName" placeholder="登录帐号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="手机号" prop="mobile">
                <el-input v-model="dataForm.mobile" placeholder="手机号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="员工分类" prop="userType">
                <el-select v-model="dataForm.userType" placeholder="请选择">
                  <el-option
                    v-for="item in userTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" v-if="dataForm.id == 0">
              <el-form-item label="登录密码" prop="password" :class="{ 'is-required': !dataForm.id }">
                <el-input
                  show-password
                  v-model="dataForm.password"
                  type="password"
                  placeholder="密码"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" v-if="dataForm.id == 0">
              <el-form-item
                label="确认密码"
                prop="comfirmPassword"
                :class="{ 'is-required': !dataForm.id }"
              >
                <el-input
                  show-password
                  v-model="dataForm.comfirmPassword"
                  type="password"
                  placeholder="确认密码"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="dataForm.email" placeholder="邮箱"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="名称" prop="realName">
                <el-input v-model="dataForm.realName" placeholder="名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <el-form-item label="状态" size="mini" prop="status">
                <el-radio-group v-model="dataForm.status">
                  <el-radio :label="1">正常</el-radio>
                  <el-radio :label="0">禁用</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <!-- 左侧基本人员信息-->
        <!-- <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="textcenter">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>-->
      </el-row>
      <!-- 权限部分-->
      <el-row :gutter="20">
        <!-- 工种-->
        <!-- <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <permissionsTree :permissionsData="workdata" @clickcheck="workcheck" :Datasucce="worksucce"></permissionsTree>
        </el-col>-->
        <!-- 角色-->
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <permissionsTree
            :permissionsData="roledata"
            @clickcheck="rolecheck"
            :Datasucce="rolesucce"
          ></permissionsTree>
        </el-col>
        <!-- 线别-->
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <permissionsTree
            :permissionsData="Linedata"
            @clickcheck="Linecheck"
            :Datasucce="Linesucce"
          ></permissionsTree>
        </el-col>
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" @click="visible = false">取消</el-button>
      <el-button size="mini" type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import permissionsTree from "@/components/user-management/permissions-tree";
import { isEmail, isMobile } from "@/utils/validate";
import { treeDataTranslate } from "@/utils";
export default {
  components: {
    permissionsTree
  },
  beforeCreate: () => {},
  data() {
    var validatePassword = (rule, value, callback) => {
      if (!this.dataForm.id && !/\S/.test(value)) {
        callback(new Error("登录密码不能为空"));
      } else {
        callback();
      }
    };
    var validateComfirmPassword = (rule, value, callback) => {
      if (!this.dataForm.id && !/\S/.test(value)) {
        callback(new Error("确认密码不能为空"));
      } else if (this.dataForm.password !== value) {
        callback(new Error("确认密码与登录密码输入不一致"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (!isEmail(value)) {
        callback(new Error("邮箱格式错误"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      // if (!isMobile(value)) {
      //   callback(new Error('手机号格式错误'))
      // } else {
      //   callback()
      // }
      callback();
    };
    return {
      worksucce: false,
      rolesucce: false,
      Linesucce: false,
      //员工分类
      userTypes: [
        {
          value: "内部",
          label: "内部"
        },
        {
          value: "外部",
          label: "外部"
        }
      ],
      //工种列表权限
      workdata: {
        title: "工种列表",
        menuList: [],
        permissions: []
      },
      //角色列表权限
      roledata: {
        title: "角色列表",
        menuList: [],
        permissions: []
      },
      //线别列表权限
      Linedata: {
        title: "组织机构列表",
        menuList: [],
        permissions: []
      },
      visible: false,
      imageUrl: "",
      dataForm: {
        id: 0,
        userId: "", //员工编号
        userName: "", //用户名
        mobile: "", //手机号
        password: "", //登录密码
        comfirmPassword: "", //确认密码
        email: "", //邮箱
        userType: "内部", //员工分类
        status: 1, //状态
        workTypeIdList: null, //工种权限code
        workName: null, //工种权限name
        roleIdList: "", //角色权限code
        roleName: "", //角色权限name
        orgIdList: "", //线别权限code
        orgName: "", //线别权限name
        orgId: "", //员工所属部门
        realName: ""
      },
      dataRule: {
        userName: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [{ validator: validatePassword, trigger: "blur" }],
        comfirmPassword: [
          { validator: validateComfirmPassword, trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { validator: validateMobile, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    init(id) {
      this.dataForm.userId = id || undefined;
      this.$http({
        url: this.$http.adornUrl("/sys/org/list"), //组织机构
        method: "get",
        params: this.$http.adornParams()
      })
        .then(({ data }) => {
          this.Linedata.menuList = treeDataTranslate(data, "orgId");
        })
        .then(() => {
          this.$http({
            url: this.$http.adornUrl("/sys/role/list"), //角色列表
            method: "get",
            params: this.$http.adornParams()
          }).then(({ data }) => {
            this.roledata.menuList = treeDataTranslate(data, "menuId");
          });
        })
        .then(() => {
          this.visible = true;
          this.$nextTick(() => {
            this.$refs.dataForm.resetFields();
            console.log(this.dataForm);
          });
        })
        .then(() => {
          if (this.dataForm.userId) {
            this.$http({
              url: this.$http.adornUrl(
                `/sys/user/info/${this.dataForm.userId}`
              ),
              method: "get",
              params: this.$http.adornParams()
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.dataForm.userId = data.user.userId;
                this.dataForm.userName = data.user.username;
                this.dataForm.mobile = data.user.mobile;
                this.dataForm.email = data.user.email;
                this.dataForm.userType = data.user.userType;
                this.dataForm.status = data.user.status;

                this.dataForm.workTypeIdList = data.user.workTypeIdList;
                this.dataForm.workName = data.user.workName;
                this.dataForm.roleIdList = data.user.roleIdList;
                this.dataForm.roleName = data.user.roleName;
                this.dataForm.orgIdList = data.user.orgIdList;
                this.dataForm.orgName = data.user.orgName;
                this.dataForm.realName = data.user.realName;

                this.workdata.permissions = data.user.workTypeIdList;
                this.roledata.permissions = data.user.roleIdList;
                this.Linedata.permissions = data.user.orgIdList;
                this.worksucce = true;
                this.rolesucce = true;
                this.Linesucce = true;
              }
            });
          }
        });
    },
    // 表单提交
    dataFormSubmit() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          console.log(this.dataForm);
          this.$http({
            url: this.$http.adornUrl(
              `/sys/user/${!this.dataForm.userId ? "save" : "update"}`
            ),
            method: "post",
            data: this.$http.adornData({
              //'userId': this.dataForm.id || undefined,
              userId: this.dataForm.userId,
              username: this.dataForm.userName,
              mobile: this.dataForm.mobile,
              password: this.dataForm.password,
              email: this.dataForm.email,
              status: this.dataForm.status,
              userType: this.dataForm.userType,
              workTypeIdList: this.dataForm.workTypeIdList,
              workName: this.dataForm.workName,
              roleIdList: this.dataForm.roleIdList,
              roleName: this.dataForm.roleName,
              orgIdList: this.dataForm.orgIdList,
              orgName: this.dataForm.orgName,
              realName: this.dataForm.realName
            })
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.visible = false;
                  this.$emit("refreshDataList");
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    //图片上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //工种的权限事件
    workcheck(check) {
      this.dataForm.workTypeIdList = check.checkcode;
      this.dataForm.workName = check.checkname;
    },
    //角色的权限事件
    rolecheck(check) {
      this.dataForm.roleIdList = check.checkcode;
      this.dataForm.roleName = check.checkname;
    },
    //线别的权限事件
    Linecheck(check) {
      console.log("check", check);
      this.dataForm.orgIdList = check.checkcode;
      this.dataForm.orgName = check.checkname;
    }
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
