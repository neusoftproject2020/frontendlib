<template>
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
			<tr>
				<td></td>
				<td></td>
				<td></td>       
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>
					<router-link to="/employee/modify/1001" class="btn btn-default">修改 </router-link>
					<a href="#" class="btn btn-default">删除 </a> 
					<router-link to="/employee/view/1001" class="btn btn-default">查看</router-link>  
				</td>
			</tr>
		  </tbody>
		</table>
		<div class="row">
			<div class="col-md-6">
			个数:<span></span>	页数:<span></span>/<span></span>
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
	
</template>

<script>
	//员工列表组件
	export default {
		name:"EmployeeList",
		data(){
			return {
				employeeList:[],
				rows:10,
				page:1,
				count:0,
				pageCount:0
			};
		},
		created(){
			
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
