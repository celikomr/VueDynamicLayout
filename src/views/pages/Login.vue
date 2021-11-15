<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <form class="form-login">
        <!-- Login form header - start -->
        <div class="text-center mb-4">
            <h1 class="mb-4 display-4">Login Page</h1>
            <p>
                Vue
                <a href="https://github.com/oclk/vue-dynamic-layout" target="_blank">application</a> with customizable dynamic layout system for pages
            </p>
        </div>
        <!-- Login form header - end -->
        <!-- Login form inputs - start -->
        <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" class="form-control" placeholder="Password" />
            <label for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me" /> Remember me
            </label>
        </div>
        <!-- Login form inputs - end -->
        <!-- Login form submit btn -->
        <button @click="router.push('/')" class="btn btn-lg btn-info w-100" type="submit">Login</button>
        <p class="mt-5 mb-3 text-muted text-center">&copy; 2021 - {{ new Date().getFullYear() }}</p>
    </form>
</template>

<style scoped>
.form-login {
    margin-top: 11%;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 420px;
    padding: 15px;
}
</style>