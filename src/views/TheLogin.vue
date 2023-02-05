<script lang="ts">
  import { ElForm } from 'element-ui/types/form'
  export default {
    name: 'TheLogin',

    components: {},

    props: {},

    data() {
      return {
        labelPosition: 'left',
        form: {
          userName: '',
          userPassword: ''
        },
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          userPassword: [
            { required: true, message: '请输入密码', trigger: 'blur' }
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },

    computed: {},

    watch: {},

    //created () {},

    //mounted () {},

    methods: {
      login() {
        ;(this.$refs['form'] as ElForm).validate((valid: boolean) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>
<template>
  <div class="login">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
    </header>
    <main>
      <el-form
        ref="form"
        :show-message="false"
        :model="form"
        label-width="60px"
        :label-position="labelPosition"
        :rules="rules"
        :hide-required-asterisk="true"
        style="width: 300px"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPassword">
          <el-input v-model="form.userPassword" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>
<style scoped lang="less">
  .login {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    header {
      width: 125px;
      height: 125px;
      position: absolute;
      top: 10%;
    }
    main {
      margin-left: -50px;
    }
  }
</style>
