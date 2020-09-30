<template>
<div style="background-color:white">
    <!-- <app-featured></app-featured> -->
    <app-shop-list :productLists="productLists"></app-shop-list>
</div>
</template>

<script>
import ShopList from "./ShopList.vue";
// import FeaturedProducts from "./components/FeaturedProducts.vue";

export default {
    data: function () {
        return {
            shopItems: 0,
            productLists: [{
                    id: 1,
                    price: "5000",
                    discount: 5,
                    title: "Fresh Mango",
                    size: "10kg",
                    description: "Fresh mango from Kano",
                },
                {
                    id: 2,
                    price: "15000",
                    discount: 5,
                    title: "Tomatoe Jos",
                    size: "15kg",
                    description: "Fresh tomamtoes from Jos",
                },
                {
                    id: 3,
                    price: "16000",
                    discount: 7,
                    title: "Fresh Tatashe",
                    size: "17kg",
                    description: "Fresh Tatashe from Kano",
                },
                {
                    id: 4,
                    price: "7000",
                    discount: 5,
                    title: "Fresh Mango",
                    size: "10kg",
                    description: "Fresh mango from Kano",
                },
                {
                    id: 5,
                    price: "17000",
                    discount: 5,
                    title: "Yam",
                    size: "10kg",
                    description: "Fresh mango from Kano",
                },
            ],
        };
    },
    components: {
        "app-shop-list": ShopList,
        // "app-featured": FeaturedProducts,
    },
    methods: {
        addToCartMain(val) {
            this.shopItems = val;
        },
    },
};
</script>
