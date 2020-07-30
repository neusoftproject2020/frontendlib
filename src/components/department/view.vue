<template>
<!-- Default box -->
<div class="box">
<div class="box-body">
	<form  method="post" >
	  <div class="form-group">
		<label for="exampleInputEmail1">部门编码</label>
		<span>{{department.code}}</span>
		
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">部门名称</label>
		<span>{{department.name}}</span>
	  </div>
	  <router-link to="/department/list" class="btn btn-default">返回</router-link>
	</form>

</div>
<!-- /.box-body -->
</div>
<!-- /.box -->
</template>

<script>
	//部门查看组件
	export default {
		name:"DepartmentView",
		data(){
			return {
				department:{}
			};
		},
		props:{
			no:{required:true}			
		},
		created(){ //组件的创建生命周期函数
			this.getDepartment();
			this.$parent.$parent.subTitle="部门查看";
		},
		methods:{
			getDepartment(){
				this.axiosJSON.get("/department/get",{
					params:{
						no:this.no					
					}
				}).then(result=>{
					this.department=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
