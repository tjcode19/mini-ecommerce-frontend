<template>
  <div>
    <!-- <div class="row p-3 text-white" style="background-color: rgb(236, 194, 110);">
      <div class="col-md-9">
        <h1>Mini eCommerce App</h1>
        <p>enov8Solutions</p>
      </div>
      <div class="navbar-nav ml-auto">
        <a href="#" class="nav-item nav-link">Register</a>
        <a href="#" class="nav-item nav-link">Login</a>
      </div>
    </div>-->
    <nav
      class="navbar navbar-expand-md navbar-dark mb-3"
      style="background-color: rgb(236, 194, 110);"
    >
      <div class="container-fluid">
        <a href="#" class="navbar-brand mr-3">Mini eCommerce App</a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <!-- <div class="navbar-nav">
            <a href="#" class="nav-item nav-link active">Home</a>
            <a href="#" class="nav-item nav-link">Services</a>
            <a href="#" class="nav-item nav-link">About</a>
            <a href="#" class="nav-item nav-link">Contact</a>
          </div> -->
          <div class="navbar-nav ml-auto">
            <a href="#" class="nav-item nav-link">Register</a>
            <a href="#" class="nav-item nav-link">Login</a>
            <a href="#" class="nav-item nav-link">Cart <span class="badge badge-light">{{ items }} </span></a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  props: ['items']
}
</script>