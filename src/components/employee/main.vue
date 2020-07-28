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
					<td>修改 删除 查看  </td>
				</tr>
			  </tbody>
		    </table>
		    <div class="row">
		    	<div class="col-md-6">
		    	个数:<span></span>	页数:<span></span>/<span></span>
		    	</div>
			    <div class="col-md-6">
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
			 <div class="row" v-if="message!=null">{{message}}</div>  
	</div>

</template>

<script>
	export default {
		name:"EmployeeMain",
		data(){
			return {};
		}
	}
</script>

<style>
</style>
