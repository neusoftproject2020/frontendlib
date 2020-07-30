<template>
<div class="box box-primary">
	<div class="box-body">
		<div class="form-row">
			<div class="form-group col-md-6">
			  <label for="inputEmail4">账号</label>
			  <span>{{employee.id}}</span>
			</div>
			<div class="form-group col-md-6">
			  <label for="inputEmail4">姓名</label>
			  <span>{{employee.name}}</span>
			</div>
		  </div>
			<div class="form-row">
			 
			 <div class="form-group col-md-6">
			   <label for="inputPassword4">性别</label>
				<span>{{employee.sex}}</span>
			</div>
			<div class="form-group col-md-6">
				<label for="inputEmail4">年龄</label>
				<span>{{employee.age}}</span>
			</div>
			
			<div class="form-row">
			  
			  <div class="form-group col-md-6">
				<label for="inputPassword4">工资</label>
				<span>{{employee.salary}}</span>
			  </div>
			</div>
			
			<div class="form-row">
			  <div class="form-group col-md-6">
				<label for="inputEmail4">生日</label>
				<span>{{employee.joinDate}}</span>
			  </div>
			  <div class="form-group col-md-6">
				<label for="inputPassword4">入职日期</label>
				<span>{{employee.joinDate}}</span>
			  </div>
			</div>
			
			
			<div class="form-row">
				 
				 <div class="form-group col-md-6">
				   <label for="inputPassword4">部门</label>
					<span>{{employee.department.name}}</span>
				</div> 
				
					  <div class="form-group">
						<label for="inputAddress2">员工照片</label>
						<span v-show="employee.photoFileName!=null">
							<img v-bind:src="photoUrl" width="400" height="350" />
							
							<img v-bind:src="restPhotoUrl" width="400" height="350" />
						</span>
						<span v-show="employee.photoFileName==null">
							无图片
						</span>
						
					  </div>
					  <div class="form-group">
						<label for="inputAddress2">爱好</label>
						<span v-for="bm in employee.behaves" v-bind:key="bm.no">
						 {{bm.name}}	
						</span>
					  </div>
			</div>				
			<router-link to="/employee/list" class="btn btn-primary" >返回</router-link>
		</div>
	</div><!-- /.box-body -->	
</div>
</template>

<script>
	//员工详细显示组件
	import MainConfig from "./../../config/index.js";
	
	export default {
		name:"EmployeeView",
		data(){
			return {
				employee:{
					id:"",
					password:"",
					name:"",
					sex:"",
					age:0,
					salary:0,
					joinDate:null,
					birthday:null,
					department:{
						no:0
					}
				},
				photoUrl:"",
				restPhotoUrl:"",
				message:""
			};
		},
		props:{
			id:{
				required:true
			}
		},
		created(){			
			this.getEmployee();
		},
		methods:{
			getEmployee(){
				this.axiosJSON.get("/employee/get/"+this.id).then(result=>{
					if(result.data.status=="OK"){
						this.employee=result.data.result;
						if(this.employee.photoFileName!=null){
							this.photoUrl=MainConfig.photoRootUrl+this.employee.photoFileName;
							this.restPhotoUrl=MainConfig.restRootUrl+"employee/photo?id="+this.id
						}
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
