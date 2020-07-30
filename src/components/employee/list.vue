<template>
<div>
	<div class="row">
		<div clas="col-md-12">
			<form>
			  <div class="form-row">
			    <div class="form-group col-md-3">
			      <label for="inputEmail4">部门</label>
			      <select class="form-control" v-model="departmentNo" v-on:change="getListByCondition" >
					  <option value="0">所有部门</option>
					  <option v-for="dm in departmentList" v-bind:key="dm.no" v-bind:value="dm.no">{{dm.name}}</option>
				  </select>
			    </div>
			    <div class="form-group col-md-3">
			      <label for="inputPassword4">入职开始日期</label>
			      <input type="date" class="form-control" v-model="startDate" v-on:change="getListByCondition">
			    </div>
				<div class="form-group col-md-3">
				  <label for="inputPassword4">入职截止日期</label>
				  <input type="date" class="form-control" v-model="endDate" v-on:change="getListByCondition">
				</div>
				<div class="form-group col-md-3">
				  <label for="inputPassword4">姓名检索</label>
				  <input type="text" class="form-control" v-model="nameKey" v-on:change="getListByCondition">
				</div>
			  </div>
			</form>
		</div>
	</div>
	<div class="box-body">
		<table id="EmployeeTable" class="table table-bordered table-hover">
		  <thead>
		  <tr>
			<th>账号</th>
			<th>姓名</th>
			<th>性别</th>       
			<th>年龄</th>
			<th>工资</th>
			<th>生日</th>
			<th>入职日期</th>
			<th>部门</th>
			<th>操作</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="em in employeeList" v-bind:key="em.id">
				<td>{{em.id}}</td>
				<td>{{em.name}}</td>
				<td>{{em.sex}}</td>       
				<td>{{em.age}}</td>
				<td>{{em.salary}}</td>
				<td>{{em.birthday}}</td>
				<td>{{em.joinDate}}</td>
				<td>{{em.department.name}}</td>
				<td>
					<router-link to="/employee/modify/1001" class="btn btn-default">修改 </router-link>
					<a href="#" class="btn btn-default">删除 </a> 
					<router-link v-bind:to="{name:'employeeview',params:{id:em.id}} " class="btn btn-default">查看</router-link>  
				</td>
			</tr>
		  </tbody>
		</table>
	 
		<div class="row">
			<div class="col-md-6">
			个数:<span>{{count}}</span>	页数:<span>{{page}}</span>/<span>{{pageCount}}</span>
			</div>
			<div class="col-md-6 text-right">
				<nav>
				  <ul class="pagination justify-content-end">
					<li class="page-item"><a class="page-link" href="#">首页</a></li>
					<li class="page-item"><a class="page-link" href="#" >上页</a></li>
					<li class="page-item"><a class="page-link" href="#" >下页</a></li>
					<li class="page-item"><a class="page-link" href="#" >末页</a></li>
				  </ul>
				</nav>
			</div>
		</div> 
		 <div class="row">
			 <div>
				 <router-link to="/employee/add" class="btn btn-default">增加员工</router-link>
			 </div>
		 </div>  
</div>
</div>	
</template>

<script>
	//员工列表组件
	export default {
		name:"EmployeeList",
		data(){
			return {
				employeeList:[],
				departmentList:[],
				count:0,
				pageCount:0,			
				rows:6,
				page:1,
				departmentNo:0,
				lowAge:0,
				highAge:0,
				startDate:null,
				endDate:null,
				nameKey:"",
				sex:""		
			};
		},
		created(){
			this.getDepartmentList();
			this.getListByCondition();
		},
		methods:{
			getListByCondition(){
				this.axiosJSON.get("/employee/list/condition/page",{
					params:{
						rows:this.rows,
						page:this.page,
						departmentNo:this.departmentNo,
						nameKey:this.nameKey,
						startJoinDate:this.startDate,
						endJoinDate:this.endDate
					}					
				}).then(result=>{
					if(result.data.status=="OK"){
						this.employeeList=result.data.list;
						this.count=result.data.count;
						this.pageCount=result.data.pageCount;
					}
				});
			},
			getDepartmentList(){
				this.axiosJSON.get("/department/list/all").then(result=>{
					if(result.data.status=="OK"){
						this.departmentList=result.data.list;
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
