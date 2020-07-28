<template>
<div class="box box-primary">
	<div class="box-body">
		<form @submit.prevent="submitAdd($event)">
		<div class="form-row">
			<div class="form-group col-md-6">
			  <label for="inputEmail4">账号</label>
			  <input type="text" class="form-control" v-model="employee.id">
			</div>
			<div class="form-group col-md-6">
			  <label for="inputPassword4">密码</label>
			  <input type="password" class="form-control" v-model="employee.password">
			</div>
		  </div>
			<div class="form-row">
			 <div class="form-group col-md-6">
			   <label for="inputEmail4">姓名</label>
			   <input type="text" class="form-control" v-model="employee.name">
			 </div>
			 <div class="form-group col-md-6">
			   <label for="inputPassword4">性别</label>
				 <select v-model="employee.sex" class="form-control">
						<option selected>男</option>
						<option>女</option>
					  </select>
			</div>
			<div class="form-row">
			  <div class="form-group col-md-6">
				<label for="inputEmail4">年龄</label>
				<input type="text" class="form-control" v-model="employee.age">
			  </div>
			  <div class="form-group col-md-6">
				<label for="inputPassword4">工资</label>
				<input type="text" class="form-control" v-model="employee.salary">
			  </div>
			</div>
			
			<div class="form-row">
			  <div class="form-group col-md-6">
				<label for="inputEmail4">生日</label>
				<input type="date" class="form-control" v-model="employee.birthday">
			  </div>
			  <div class="form-group col-md-6">
				<label for="inputPassword4">入职日期</label>
				<input type="date" class="form-control" v-model="employee.joinDate">
			  </div>
			</div>
			
			<div class="form-row">
				 
				 <div class="form-group col-md-6">
				   <label for="inputPassword4">部门</label>
					 <select v-model="employee.department.no" class="form-control">
						 <option v-for="dm in departmentList" v-bind:value="dm.no" v-bind:key="dm.no">{{dm.name}}</option>
					 </select>
				</div> 
				 
					 
					  <div class="form-group">
						<label for="inputAddress2">员工照片</label>
						<input type="file" class="form-control" name="employeePhoto" >
					  </div>
					  <div class="form-group">
						<label for="inputAddress2">爱好</label>
						<span  v-for="bm in behaveList" v-bind:key="bm.no" >
							<input type="checkbox" v-model="selectbehaves" name="selectbehaves" v-bind:value="bm.no" />{{bm.name}}
						</span>
					  </div>
			</div>				
			<button type="submit" class="btn btn-primary">提交</button>
			<router-link to="/employee/list" class="btn btn-primary">取消</router-link>
		</div>
		</form>
	</div><!-- /.box-body -->	
</div>
</template>

<script>
	//员工修改组件
	export default {
		name:"EmployeeModify",
		data(){
			return {
				departmentList:[],
				behaveList:[],
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
				employeePhoto:Object,
				selectbehaves:[]
			};
		}
	}
</script>

<style>
</style>
