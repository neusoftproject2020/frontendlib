<template>
    <!-- Default box -->
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">修改爱好</h3>
        </div>
        <div class="box-body">
            <form  method="post" v-on:submit.prevent="modify()">
                <div class="form-group">
                    <label for="exampleInputEmail1">爱好编号</label>
                    <input type="text" class="form-control" v-model="behave.no" readonly>
                    <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">爱好名称</label>
                    <input type="text" class="form-control" v-model="behave.name">
                </div>
                <button type="submit" class="btn btn-primary">提交</button>
                <router-link to="/department/list" class="btn btn-default">取消</router-link>
            </form>

        </div>
        <!-- /.box-body -->
    </div>
    <!-- /.box -->
</template>

<script>
    import axios from "axios";
    //部门修改组件
    export default {
        name:"BehaveModify",
        data(){
            return {
                behave:{
                    name:"",
                    no:0
                }
            };
        },
        created(){ //组件的创建生命周期函数
            let behaveNo=this.$route.params.no;
            this.getBehave(behaveNo);

        },
        methods:{
            getBehave(no){

                axios.get("http://localhost:8200/behave/get?no="+no).then(result=>{
                    this.behave=result.data.result;
                });
            },
            modify(){
                axios.post("http://localhost:8200/behave/modify",this.behave).then(result=>{
                    if(result.data.status=="OK"){
                        alert(result.data.message);
                        this.$router.push("/behave/list"); //编程方式跳转到爱好列表组件
                    }
                    else{
                        alert(result.data.message);
                    }
                });
            }
        }
    }
</script>

<style>
</style>
