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
           <a href="#">
             <i class="fa fa-dashboard"></i> <span>部门管理</span>
             <span class="pull-right-container">
               <i class="fa fa-angle-left pull-right"></i>
             </span>
           </a>          
         </li>
		 <li class="treeview">
		   <a href="#">
		     <i class="fa fa-dashboard"></i> <span>爱好管理</span>
		     <span class="pull-right-container">
		       <i class="fa fa-angle-left pull-right"></i>
		     </span>
		   </a>          
		 </li>
		 <li class="treeview">
		   <a href="#">
		     <i class="fa fa-dashboard"></i> <span>员工管理</span>
		     <span class="pull-right-container">
		       <i class="fa fa-angle-left pull-right"></i>
		     </span>
		   </a>          
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
         <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
         <li><a href="#">Examples</a></li>
         <li class="active">Blank page</li>
       </ol>
     </section>
   
     <!-- Main content -->
     <section class="content">
   
       <!-- Default box -->
       <div class="box">
         
         <div class="box-body">
            主显示区
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
   
   <!-- Control Sidebar -->
   <aside class="control-sidebar control-sidebar-dark">
     <!-- Create the tabs -->
     <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
       <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
   
       <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
     </ul>
     <!-- Tab panes -->
     <div class="tab-content">
       <!-- Home tab content -->
       <div class="tab-pane" id="control-sidebar-home-tab">
         <h3 class="control-sidebar-heading">Recent Activity</h3>
         <ul class="control-sidebar-menu">
           <li>
             <a href="javascript:void(0)">
               <i class="menu-icon fa fa-birthday-cake bg-red"></i>
   
               <div class="menu-info">
                 <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>
   
                 <p>Will be 23 on April 24th</p>
               </div>
             </a>
           </li>
           <li>
             <a href="javascript:void(0)">
               <i class="menu-icon fa fa-user bg-yellow"></i>
   
               <div class="menu-info">
                 <h4 class="control-sidebar-subheading">Frodo Updated His Profile</h4>
   
                 <p>New phone +1(800)555-1234</p>
               </div>
             </a>
           </li>
           <li>
             <a href="javascript:void(0)">
               <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>
   
               <div class="menu-info">
                 <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>
   
                 <p>nora@example.com</p>
               </div>
             </a>
           </li>
           <li>
             <a href="javascript:void(0)">
               <i class="menu-icon fa fa-file-code-o bg-green"></i>
   
               <div class="menu-info">
                 <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>
   
                 <p>Execution time 5 seconds</p>
               </div>
             </a>
           </li>
         </ul>
         <!-- /.control-sidebar-menu -->
   
         <h3 class="control-sidebar-heading">Tasks Progress</h3>
         <ul class="control-sidebar-menu">
           <li>
             <a href="javascript:void(0)">
               <h4 class="control-sidebar-subheading">
                 Custom Template Design
                 <span class="label label-danger pull-right">70%</span>
               </h4>
   
               <div class="progress progress-xxs">
                 <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
               </div>
             </a>
           </li>
           <li>
             <a href="javascript:void(0)">
               <h4 class="control-sidebar-subheading">
                 Update Resume
                 <span class="label label-success pull-right">95%</span>
               </h4>
   
               <div class="progress progress-xxs">
                 <div class="progress-bar progress-bar-success" style="width: 95%"></div>
               </div>
             </a>
           </li>
           <li>
             <a href="javascript:void(0)">
               <h4 class="control-sidebar-subheading">
                 Laravel Integration
                 <span class="label label-warning pull-right">50%</span>
               </h4>
   
               <div class="progress progress-xxs">
                 <div class="progress-bar progress-bar-warning" style="width: 50%"></div>
               </div>
             </a>
           </li>
           <li>
             <a href="javascript:void(0)">
               <h4 class="control-sidebar-subheading">
                 Back End Framework
                 <span class="label label-primary pull-right">68%</span>
               </h4>
   
               <div class="progress progress-xxs">
                 <div class="progress-bar progress-bar-primary" style="width: 68%"></div>
               </div>
             </a>
           </li>
         </ul>
         <!-- /.control-sidebar-menu -->
   
       </div>
       <!-- /.tab-pane -->
       <!-- Stats tab content -->
       <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
       <!-- /.tab-pane -->
       <!-- Settings tab content -->
       <div class="tab-pane" id="control-sidebar-settings-tab">
         <form method="post">
           <h3 class="control-sidebar-heading">General Settings</h3>
   
           <div class="form-group">
             <label class="control-sidebar-subheading">
               Report panel usage
               <input type="checkbox" class="pull-right" checked>
             </label>
   
             <p>
               Some information about this general settings option
             </p>
           </div>
           <!-- /.form-group -->
   
           <div class="form-group">
             <label class="control-sidebar-subheading">
               Allow mail redirect
               <input type="checkbox" class="pull-right" checked>
             </label>
   
             <p>
               Other sets of options are available
             </p>
           </div>
           <!-- /.form-group -->
   
           <div class="form-group">
             <label class="control-sidebar-subheading">
               Expose author name in posts
               <input type="checkbox" class="pull-right" checked>
             </label>
   
             <p>
               Allow the user to show his name in blog posts
             </p>
           </div>
           <!-- /.form-group -->
   
           <h3 class="control-sidebar-heading">Chat Settings</h3>
   
           <div class="form-group">
             <label class="control-sidebar-subheading">
               Show me as online
               <input type="checkbox" class="pull-right" checked>
             </label>
           </div>
           <!-- /.form-group -->
   
           <div class="form-group">
             <label class="control-sidebar-subheading">
               Turn off notifications
               <input type="checkbox" class="pull-right">
             </label>
           </div>
           <!-- /.form-group -->
   
           <div class="form-group">
             <label class="control-sidebar-subheading">
               Delete chat history
               <a href="javascript:void(0)" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>
             </label>
           </div>
           <!-- /.form-group -->
         </form>
       </div>
       <!-- /.tab-pane -->
     </div>
   </aside>
   <!-- /.control-sidebar -->
   <!-- Add the sidebar's background. This div must be placed
        immediately after the control sidebar -->
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
