<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">爱好管理</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
					<th scope="col">编号</th>
					<th scope="col">名称</th>
					<th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="dm in behaveList" v-bind:key="dm.no">
				  <td>{{dm.no}}</td>
				  <td>{{dm.name}}</td>
					<td>
					  <router-link v-bind:to="'/behave/modify/'+dm.no" class="btn btn-default">修改</router-link>
					  <a href="#" v-on:click="deleteBehave(dm.no)"  class="btn btn-danger">删除</a>
					  <router-link to="/behave/view" class="btn btn-default">查看</router-link>
					</td>
				</tr>
			  </tbody>
			</table>
		</div>
		<!-- /.box-body -->
		<router-link to="/behave/add" class="btn btn-default">增加爱好</router-link>
	</div>

</template>

<script>
	import axios from "axios";
	export default {
		name:"BehaveList",
		data(){
			return {
				behaveList:[],
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
				axios.get("http://localhost:8200/behave/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.behaveList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteBehave(no){
				let checkresult=confirm("您确认要删除此爱好么");
				if(checkresult){
					axios.post("http://localhost:8200/behave/delete",{no:no}).then(result=>{
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
