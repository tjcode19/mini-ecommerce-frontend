<template>
<div class=" min-vh-100 justify-center primary-bg">
    <app-header :items="shopItems" :isLogin="isLogin"></app-header>
    <!-- <app-market-place></app-market-place> -->

    <app-seller-dashboard></app-seller-dashboard>

    <!-- <app-admin-dashboard v-if="isLogin"></app-admin-dashboard>

    <app-auth v-if="!isLogin"></app-auth> -->
    <app-footer></app-footer>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            shopItems: 0,
            isLogin: true
        };
    },
    components: {
        // "app-shop-list": ShopList,
        // "app-featured": FeaturedProducts,
    },
    methods: {
        addToCartMain(val) {
            this.shopItems = val;
        },
    },
};
</script>

<style>
.primary-bg {
    background-color: #f5ecdb;
}

.primary-text-color {
    color: #f3ab24;
}
</style>
