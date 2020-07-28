<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">部门管理</h3>
	          <div class="box-tools pull-right">
	            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
	                    title="Collapse">
	              <i class="fa fa-minus"></i></button>
	            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
	              <i class="fa fa-times"></i></button>
	          </div>
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
				  
				    <tr>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td><a href="tomodify.mvc" class="btn btn-default">修改</a>
				          <a href="todelete.mvc" class="btn btn-danger">删除</a> 
				          <a href="toview.mvc" class="btn btn-default">查看</a>  </td>
				    </tr>
				
				  </tbody>
				</table>
	        </div>
	        <!-- /.box-body -->
	        <a href="toadd.mvc" class="btn btn-default">增加新部门</a>
	      </div>

</template>

<script>
	export default {
		name:"DepartmentMain",
		data(){
			return {};
		}
	}
</script>

<style>
</style>
