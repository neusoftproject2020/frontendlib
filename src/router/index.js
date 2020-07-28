import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由管理的组件
//首页区组件
import HomeMain  from "./../components/home/main.vue";
import DepartmetnMain  from "./../components/department/main.vue";
import BehaveMain  from "./../components/behave/main.vue";
import EmployeeMain  from "./../components/employee/main.vue";


Vue.use(VueRouter)

const routes = [
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/department",name:"departmentmain",component:DepartmetnMain},
	{path:"/behave", name:"behavemain",component:BehaveMain},
	{path:"/employee", name:"employeemain", component:EmployeeMain}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

export default router
