import Vue from 'vue'
import VueRouter from 'vue-router'

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


import BehaveMain  from "./../components/behave/main.vue";
import EmployeeMain  from "./../components/employee/main.vue";


Vue.use(VueRouter)

const routes = [
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/login",name:"login",component:AdminLogin},
	{path:"/department",name:"departmentmain", component:DepartmetnMain,children:[
		{path:"list",name:"departmentlist",component:DepartmetnList},
		{path:"add",name:"departmentadd",component:DepartmetnAdd},
		{path:"modify/:no",name:"departmentmodify",component:DepartmetnModify},
		{path:"view/:no",name:"departmentview",component:DepartmetnView},
		{path:"", redirect: "list" }
	]},
	{path:"/behave", name:"behavemain",component:BehaveMain},
	{path:"/employee", name:"employeemain", component:EmployeeMain}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

export default router
