<template>
<div class="container mt-3 mb-4">
    <div class="row">
        <div class="col-xl-3 col-sm-4 p-1" v-for="item in cartList" :key="item">
            <div class="inner-card p-1" @click="addToCart()">
                <div class="box text-center">
                    <img src="../assets/apple.jpg" class="w-100 rounded" style="height:200px" alt="Sample Image" />
                </div>
                <span> {{ item.title }}</span>
                <div>
                    <span class="lead">₦ {{ item.price }}</span>
                </div>

                <p>
                    <del>₦ 80,000</del>
                </p>
            </div>
        </div>
    </div>
    <p>Current Page: {{ currentPage }} of {{ noOfPages}}</p>
    <div class="row mt-4 justify-content-center">
        <nav>
            <ul class="pagination">
                <li class="page-item" :class="{disabled: currentPage <= 1}">
                    <a href="#" class="page-link" @click="subPage()">Previous</a>
                </li>
                <li class="page-item" :class="{active:currentPage==p}" v-for="p in pagination()" :key="p">
                    <a href="#" class="page-link" @click="currentPage = p">{{p}}</a>
                </li>

                <li class="page-item" :class="{disabled: currentPage == noOfPages}">
                    <a href="#" class="page-link" @click="addPage()">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</div>
</template>

<script>
export default {
    props: ['productLists'],
    data: function () {
        return {
            noOfItem: 40,
            currentPage: 1,
            noPerPage: 20,
            cartItems: 0,
            cartList: this.productLists,
        };
    },
    computed: {
        noOfPages: function () {
            return this.noOfItem / this.noPerPage;
        },
    },
    methods: {
        pagination() {
            var noOfPages = this.noOfItem / this.noPerPage;
            return noOfPages;
        },
        addPage() {
            return (this.currentPage += 1);
        },
        subPage() {
            return (this.currentPage -= 1);
        },
        addToCart() {
            console.log("here " + this.cartItems);
            this.cartItems += 1;
            this.$emit("cartitem", this.cartItems);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.card {
    background-color: antiquewhite;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.inner-card {
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background: rgb(243, 229, 201);
}

/* p{
        padding: 30px;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        background: #dbdfe5;
    } */
</style>
