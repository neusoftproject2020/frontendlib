<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">部门管理</h3>	          
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
				  <th scope="col">编号</th>
				  <th scope="col">编码</th>
				  <th scope="col">名称</th>
				  <th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="dm in departmentList" v-bind:key="dm.no">
				  <td>{{dm.no}}</td>
				  <td>{{dm.code}}</td>
				  <td>{{dm.name}}</td>
					<td>
					  <router-link v-bind:to="'/department/modify/'+dm.no" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteDepartment(dm.no)"  class="btn btn-danger">删除</a> 
					  <router-link to="/department/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
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
		<!-- /.box-body -->
		<router-link to="/department/add" class="btn btn-default">增加部门</router-link>
	</div>
	
</template>

<script>
	//import axios from "axios";
	export default {
		name:"DepartmentList",
		data(){
			return {
				departmentList:[],
				page:1,
				rows:10,
				count:0,
				pageCount:0
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				this.axiosJSON.get("/department/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.departmentList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteDepartment(no){
				let checkresult=confirm("您确认要删除此部门么");
				if(checkresult){
					this.axiosJSON.post("/department/delete",{no:no}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getList();
						}
					});
				}
				
				
			}
		}
	}
</script>

<style>
</style>
