<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">增加部门</h3>
</div>
<div class="box-body">
	<form method="post" v-on:submit.prevent="add()" >
	  <div class="form-group">
		<label for="exampleInputEmail1">部门编码</label>
		<input type="text" class="form-control" v-model="department.code" required >
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">部门名称</label>
		<input type="text" class="form-control" v-model="department.name" required>
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	  <router-link to="/department/list" class="btn btn-default">取消</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
		  
</template>

<script>
	import axios from "axios";
	export default {
		name:"DepartmentAdd",
		data(){
			return {
				department:{
					code:"",
					name:""
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8200/department/add",this.department).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/department/list"); //编程方式跳转到部门列表组件
					}
					else{
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>
