<template>
<!-- Default box -->
<div class="box">

<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputEmail1">部门编码</label>
		<input type="text" class="form-control" v-model="department.code" >
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">部门名称</label>
		<input type="text" class="form-control" v-model="department.name">
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
	//import axios from "axios";
	//部门修改组件
	export default {
		name:"DepartmentModify",
		data(){
			return {
				department:{
					code:"",
					name:"",
					no:0
				}
			};
		},
		created(){ //组件的创建生命周期函数
			let departmentNo=this.$route.params.no;
			this.getDepartment(departmentNo);
			this.$parent.$parent.subTitle="部门修改";
		},
		methods:{
			getDepartment(no){
				
				this.axiosJSON.get("/department/get?no="+no).then(result=>{
					this.department=result.data.result;
				});
			},
			modify(){
				this.axiosJSON.post("/department/modify",this.department).then(result=>{
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
