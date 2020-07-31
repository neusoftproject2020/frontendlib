<template>

<div id="app" class="wrapper">
   <header class="main-header">
     <!-- Logo -->
     <a href="../../index2.html" class="logo">
       <!-- mini logo for sidebar mini 50x50 pixels -->
       <span class="logo-mini"><b></b></span>
       <!-- logo for regular state and mobile devices -->
       <span class="logo-lg"><b>东软OA管理系统</b></span>
     </a>
     <!-- Header Navbar: style can be found in header.less -->
     <nav class="navbar navbar-static-top">
       <!-- Sidebar toggle button-->
       <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
         <span class="sr-only">Toggle navigation</span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
       </a>
     </nav>
   </header>
   
   <!-- =============================================== -->
   
   <!-- Left side column. contains the sidebar -->
   <home-left></home-left>
   
   <!-- =============================================== -->
   
   <!-- Content Wrapper. Contains page content -->
   <div class="content-wrapper">
     <!-- Content Header (Page header) -->
     <section class="content-header">
       <h1>
        {{mainTitle}}
         <small><b>{{subTitle}}</b></small>
       </h1>
       <ol class="breadcrumb">
         <li><router-link to="/"><i class="fa fa-dashboard"></i>首页</router-link></li>
         <li><a href="#"></a></li>
         <li class="active"></li>
       </ol>
     </section>
   
     <!-- Main content -->
     <section class="content">
   
       <!-- Default box -->
       <div class="box">
         
         <div class="box-body">
            <router-view></router-view>
         </div>
         
       </div>
       <!-- /.box -->
   
     </section>
     <!-- /.content -->
   </div>
   <!-- /.content-wrapper -->
   
   <footer class="main-footer">
     <div class="pull-right hidden-xs">
       <b>Version</b>1.0 
     </div>
     <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">东软集团有限公司</a>.</strong> 版权所有.
   </footer>
   <div class="control-sidebar-bg"></div>
</div>	
</template>
<script>
	import HomeLeft from "./components/common/HomeLeft.vue";
	//员工增加组件
	export default {
		name:"App",
		data(){
			return {
				mainTitle:"系统主页",
				subTitle:"欢迎界面"
			};
		},
		computed:{
			loginuser(){
				return this.$store.getters.loginuser;
			}
		}
	}
</script>

<style>
@import url("assets/bower_components/bootstrap/dist/css/bootstrap.min.css");
@import url("assets/bower_components/font-awesome/css/font-awesome.min.css");
@import url("assets/bower_components/Ionicons/css/ionicons.min.css");
@import url("assets/dist/css/AdminLTE.min.css");
@import url("assets/dist/css/skins/_all-skins.min.css");


</style>
