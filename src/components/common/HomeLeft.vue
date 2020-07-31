<template>
<div>
	<aside class="main-sidebar">
	  <!-- sidebar: style can be found in sidebar.less -->
	  <section class="sidebar">
	    <!-- Sidebar user panel -->
	    <div class="user-panel">
	      <div class="pull-left image">
	        <img src="./assets/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
	      </div>
	      <div class="pull-left info">
	        <p v-if="loginuser!=null">{{loginuser.name}}</p>
			   <p v-else>未登录</p>
				<router-link v-if="loginuser==null" to="/login"><i class="fa fa-circle text-success"></i>登录</router-link>
				<router-link v-else to="/login"><i class="fa fa-circle text-success"></i>注销</router-link> 
				
	      </div>
	    </div>
	    <!-- sidebar menu: : style can be found in sidebar.less -->
	    <ul v-if="loginuser!=null" class="sidebar-menu" data-widget="tree">
	      <li class="header">系统功能选择</li>
	      <li class="treeview">
	       <router-link to="/department">
	          <i class="fa fa-dashboard"></i> <span>部门管理</span>
	          <span class="pull-right-container">
	            <i class="fa fa-angle-left pull-right"></i>
	          </span>
	        </router-link>          
	      </li>
			 <li class="treeview">
			   <router-link to="/behave">
			     <i class="fa fa-dashboard"></i> <span>爱好管理</span>
			     <span class="pull-right-container">
			       <i class="fa fa-angle-left pull-right"></i>
			     </span>
			   </router-link>          
			 </li>
			 <li class="treeview">
			  <router-link to="/employee">
			     <i class="fa fa-dashboard"></i> <span>员工管理</span>
			     <span class="pull-right-container">
			       <i class="fa fa-angle-left pull-right"></i>
			     </span>
			   </router-link>        
			 </li>
	      
	    </ul>
	  </section>
	  <!-- /.sidebar -->
	</aside>
	
</div>
</template>

<script>
	export default {
		name:"HomeLeft",
		data(){
			return {};
		}
	}
</script>

<style>
</style>
