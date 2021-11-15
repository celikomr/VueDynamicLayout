<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <form class="form-register">
        <!-- Register form header - start -->
        <div class="text-center mb-4">
            <h1 class="mb-4 display-4">Register Page</h1>
            <p>
                Vue
                <a href="https://github.com/oclk/vue-dynamic-layout" target="_blank">application</a> with customizable dynamic layout system for pages
            </p>
        </div>
        <!-- Register form header - end -->
        <!-- Register form inputs - start -->
        <div class="form-floating mb-3">
            <input class="form-control" id="floatingInput" placeholder="Username" />
            <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
        </div>
        <!-- Register form inputs - end -->
        <!-- Register form submit btn -->
        <button @click="router.push('/')" class="btn btn-lg btn-primary w-100" type="submit">Register</button>
        <p class="mt-5 mb-3 text-muted text-center">&copy; 2021 - {{ new Date().getFullYear() }}</p>
    </form>
</template>

<style scoped>
.form-register {
    margin-top: 11%;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 420px;
    padding: 15px;
}
</style>