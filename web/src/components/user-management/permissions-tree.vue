<!--
/**
* @name permissions-tree
* @module C:\tmk-mes\web\tmk-mes-web\src\components\user-management\permissions-tree.vue
* @description 权限组件（工种，角色，线别）
* @author xiashan
* @date 2019-08-01
* @example <permissionsTree></permissionsTree>
*/
-->
<template>
  <div class="permissionsTree textcenter" style="border: 1px solid #dcdfe6;">
    <!-- 标题-->
    <h4>{{ permissionsData.title }}</h4>
      <el-tree class="permissionTree"
        :data="permissionsData.menuList"
        :props="menuListTreeProps"
        node-key="menuId"
        ref="menuListTree"
        @check="clickDeal"
        show-checkbox>
      </el-tree>
  </div>
</template>

<script>
import { treeDataTranslate } from '@/utils'
export default {
	name: 'permissionsTree',
	props: {
		permissionsData: {
		  type: Object,
		},
    Datasucce: {
      type: Boolean,
    },
	},
	data(){
		 return {
			menuListTreeProps: {
			  label: 'name',
			  children: 'children'
			},
    }
	},
	methods: {
      /**      树形菜单复选框点击事件     **/
    clickDeal(currentObj, treeStatus) {
      let checkname = "";
      let checkcode;
      treeStatus.checkedNodes.forEach(d => {
        checkname += d.name+",";
      })
      checkcode = this.$refs.menuListTree.getCheckedKeys();
      console.log("check11",this.$refs.menuListTree)
      let check = {
        checkname:checkname,
        checkcode:checkcode
      }
      this.$emit('clickcheck',check);
    },
    handlers(){
      var tableData = this.permissionsData.permissions;
      var datalist = JSON.parse(JSON.stringify(tableData));
      if(this.permissionsData.permissions != []){
        this.$refs.menuListTree.setCheckedKeys(datalist)
      }
    }
	},
  watch: {
    permissionsData: {
      handler () {
        if (this.Datasucce) {
            this.handlers();
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
  .permissionTree{height: 250px;overflow-y: auto;}

</style>
