<template>

<div id="app" class="wrapper">
   <home-top></home-top>
   
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
   <home-footer></home-footer>
   
   <div class="control-sidebar-bg"></div>
</div>	
</template>
<script>
	import HomeLeft from "./components/common/HomeLeft.vue";
	import HomeFooter from "./components/common/HomeFooter.vue";
	import HomeTop from "./components/common/HomeTop.vue";
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
		},
		components:{"home-left":HomeLeft,
			"home-footer":HomeFooter,
			"home-top":HomeTop
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
