import Vue from 'vue'
import VueRouter from 'vue-router'
//引入Vuex Store
import store from './../store/index'

//引入路由管理的组件
//首页区组件
import AdminLogin from "./../components/admin/login.vue";
import HomeMain  from "./../components/home/main.vue";
//引入部门的组件
import DepartmetnMain  from "./../components/department/main.vue";
import DepartmetnList  from "./../components/department/list.vue";
import DepartmetnAdd  from "./../components/department/add.vue";
import DepartmetnModify  from "./../components/department/modify.vue";
import DepartmetnView  from "./../components/department/view.vue";

//引入爱好的组件
import BehaveMain  from "./../components/behave/main.vue";
import BehaveList  from "./../components/behave/list.vue";
import BehaveAdd  from "./../components/behave/add.vue";
import BehaveModify  from "./../components/behave/modify.vue";
import BehaveView  from "./../components/behave/view.vue";
//引入员工组件 （吕海东修改）
import EmployeeMain  from "./../components/employee/main.vue";
import EmployeeList  from "./../components/employee/list.vue";
import EmployeeAdd  from "./../components/employee/add.vue";
import EmployeeModify  from "./../components/employee/modify.vue";
import EmployeeView  from "./../components/employee/view.vue";


Vue.use(VueRouter)

const routes = [
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/login",name:"login",component:AdminLogin},
	{path:"/department",name:"departmentmain", component:DepartmetnMain,children:[
		{path:"list",name:"departmentlist",component:DepartmetnList},
		{path:"add",name:"departmentadd",component:DepartmetnAdd},
		{path:"modify/:no",name:"departmentmodify",component:DepartmetnModify},
		{path:"view/:no",name:"departmentview",component:DepartmetnView,props:true},
		{path:"", redirect: "list" }
	]},
	{path:"/behave",name:"behavetmain", component:BehaveMain,children:[
			{path:"list",name:"behavelist",component:BehaveList},
			{path:"add",name:"behaveadd",component:BehaveAdd},
			{path:"modify/:no",name:"behavemodify",component:BehaveModify},
			{path:"view/:no",name:"behaveview",component:BehaveView},
			{path:"", redirect: "list" }
		]},
	{path:"/employee", name:"employeemain", component:EmployeeMain,children:[
			{path:"list",name:"employeelist",component:EmployeeList},
			{path:"add",name:"employeeadd",component:EmployeeAdd},
			{path:"modify/:id",name:"employeemodify",component:EmployeeModify,props:true},
			{path:"view/:id",name:"employeeview",component:EmployeeView,props:true},
			{path:"", redirect: "list" }
		]}
]
//创建路由对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})
//路由守护实现登录拦截
router.beforeEach((to,from, next) => {
	if(to.path=="/login"){
		next();
	}
	else{
		 if(store.getters.loginuser!=null){
			 next();
		 }
		 else{
			 next("/login");
		 }
	}
})

export default router
