<template>
<div class="container-fluid">
    <div class="row primary-bg">
        <div class="side primary-bg">
            <h4 class="primary-text-color">Hello, Tolulope</h4>
            <div class="navbar">
                <a href="#"><i class="fas fa-university"></i>Dashboard</a>
                <a href="#"><i class="fas fa-users"></i>All Products</a>
                <a href="#"><i class="fas fa-dumpster"></i>Add New Product</a>
                <a href="#"><i class="fas fa-credit-card"></i>Transactions</a>
            </div>
        </div>
        <div class="main">
            <div class="row">
                <h5 class="primary-text-color">Dashboard <span>(Seller)</span></h5>
            </div>
            <div class="row">

                <div class="col card blue">
                    <div class="col-12"><i class="fas fa-pizza-slice"></i></div>

                    <div class=" d-flex justify-content-between mt-2 ">
                        <span>Total Products</span>
                        <span>17</span>
                    </div>
                </div>

                <div class="col card orange-deep">
                    <div class="col-12"><i class="fas fa-money-check"></i></div>

                    <div class=" d-flex justify-content-between mt-2 ">
                        <span>Total Transactions</span>
                        <span>17</span>
                    </div>
                </div>
            </div>

            <app-featured-prods></app-featured-prods>

        </div>
    </div>
</div>
</template>

<script>
// import Login from "./Login.vue";
// import SignUp from "./Register.vue";
import FeaturedProd from "./FeaturedProducts.vue"

export default {
    components: {
        'app-featured-prods': FeaturedProd,
        // 'app-sign-up':SignUp
    },
};
</script>

<style scoped>
.card {
    padding: 18px;
    margin-right: 5px;
    margin-bottom: 5px;
}

.orange {
    background-color: #fcf3e0;
    border: #e9a316 1px dashed;
}

.blue {
    background-color: #EAF5FF;
    border: #1985eb 1px dashed;
}

.blue-deep {
    background-color: #b1d7fa;
    border: #1985eb 1px dashed;
}

.orange-deep {
    background-color: #fae7bd;
    border: #e9a316 1px dashed;
}

h4 {
    margin-left: 20px;
    margin-bottom: 30px;
}

/*
.row {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
}*/

.flex-container {
    display: flex;
    align-items: stretch;
    background-color: #f1f1f1;
}

.flex-container>div {
    background-color: DodgerBlue;
    color: white;
    margin: 10px;
    text-align: center;
    height: 200px;
    line-height: 75px;
    font-size: 30px;
}

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {

    .row,
    .navbar {
        flex-direction: column;
    }
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
    flex: 20%;
    /* background-color:#efdfbf; */
    padding: 30px 20px 0px 0px;
}

/* Main column */
.main {
    flex: 75%;
    background-color: white;
    padding: 20px 50px;
    border-radius: 20px 0px 0px 20px;
}

/* Style the top navigation bar */
.navbar {
    display: flex;
    /* background-color: #333; */
    flex-direction: column;
    padding: 10px 0px 0px 0px;
}

/* Style the navigation bar links */
.navbar a {
    color: #f5c462;
    padding: 14px 20px;
    text-decoration: none;
    text-align: left;
    width: 100%;
    font-size: 15px;
    font-weight: 400;
}

.navbar i {
    min-width: 2.0rem;
}

/* Change color on hover */
.navbar a:hover {
    background-color: #f3d290;
    color: white;
}
</style>
