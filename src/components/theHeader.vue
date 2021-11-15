<template>
    <div class="container">
        <nav class="py-2">
            <div class="d-flex flex-wrap">
                <!-- Top Left Menu - start -->
                <ul class="nav me-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link link-dark px-2 active">Products</router-link>
                    </li>
                    <div class="d-flex divider-nav">
                        <div class="vr"></div>
                    </div>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link link-dark px-2">Orders</router-link>
                    </li>
                    <div class="d-flex divider-nav">
                        <div class="vr"></div>
                    </div>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link link-dark px-2">Pricing</router-link>
                    </li>
                    <div class="d-flex divider-nav">
                        <div class="vr"></div>
                    </div>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link link-dark px-2">FAQs</router-link>
                    </li>
                    <div class="d-flex divider-nav">
                        <div class="vr"></div>
                    </div>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link link-dark px-2">About</router-link>
                    </li>
                </ul>
                <!-- Top Left Menu - end -->
                <!-- Top Right Menu - start -->
                <ul class="nav">
                    <li class="nav-item">
                        <router-link to="login" class="nav-link link-dark px-2">Login</router-link>
                    </li>
                    <div class="d-flex divider-nav">
                        <div class="vr"></div>
                    </div>
                    <li class="nav-item">
                        <router-link to="register" class="nav-link link-dark px-2">Register</router-link>
                    </li>
                </ul>
                <!-- Top Right Menu - end -->
            </div>
        </nav>
        <!-- Main Header - start -->
        <header class="d-flex px-4 flex-wrap justify-content-center py-4 border rounded">
            <!-- Header Title - start -->
            <router-link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">Vue Dynamic Layout</span>
            </router-link>
            <!-- Header Title - end -->
            <ul class="nav nav-pills">
                <!-- Sample Header Button - start -->
                <li class="nav-item">
                    <div class="btn-group">
                        <button type="button" class="btn btn-warning">Features</button>
                    </div>
                </li>
                <!-- Sample Header Button - end -->
                <div class="d-flex divider">
                    <div class="vr"></div>
                </div>
                <!-- Sample Header Icon Button - start -->
                <li class="nav-item ml-4">
                    <button type="button" class="btn btn-light position-relative border">
                        <i class="bi bi-cart2"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                            99+
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </li>
                <!-- Sample Header Icon Button - end -->
            </ul>
        </header>
        <!-- Main Header - end -->
    </div>
</template>

<style scoped>
.divider {
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
}

.divider-nav {
    height: 20px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 11px;
}
</style>