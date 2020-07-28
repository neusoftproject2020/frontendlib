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
   <aside class="main-sidebar">
     <!-- sidebar: style can be found in sidebar.less -->
     <section class="sidebar">
       <!-- Sidebar user panel -->
       <div class="user-panel">
         <div class="pull-left image">
           <img src="./assets/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
         </div>
         <div class="pull-left info">
           <p>管理员</p>
           <a href="#"><i class="fa fa-circle text-success"></i>注销</a>
         </div>
       </div>
       <!-- sidebar menu: : style can be found in sidebar.less -->
       <ul class="sidebar-menu" data-widget="tree">
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
   
   <!-- =============================================== -->
   
   <!-- Content Wrapper. Contains page content -->
   <div class="content-wrapper">
     <!-- Content Header (Page header) -->
     <section class="content-header">
       <h1>
        系统主页
         <small>子功能</small>
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

<style>
@import url("assets/bower_components/bootstrap/dist/css/bootstrap.min.css");
@import url("assets/bower_components/font-awesome/css/font-awesome.min.css");
@import url("assets/bower_components/Ionicons/css/ionicons.min.css");
@import url("assets/dist/css/AdminLTE.min.css");
@import url("assets/dist/css/skins/_all-skins.min.css");


</style>
