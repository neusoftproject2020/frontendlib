<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加爱好</h3>

	        </div>
	        <div class="box-body">
	       	  <form method="post" v-on:submit.prevent="add()">
				  <div class="form-group">
				    <label for="exampleInputPassword1">爱好名称</label>
				    <input type="text" class="form-control" v-model="behave.name">
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <a href="/behave/list" class="btn btn-default">取消</a>
				</form>

	        </div>
	        <!-- /.box-body -->
	      </div>
	      <!-- /.box -->

</template>

<script>
	import axios from "axios";
	export default {
		name:"BehaveAdd",
		data(){
			return {
				behave:{
					name:""
				}
			};
		},
		methods:{
			add(){
				axios.post("http://localhost:8200/behave/add",this.behave).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/behave/list"); //编程方式跳转到部门列表组件
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
