<template>
<div class="container h-100">
    <div class="row">
        <div class="col-md-12 d-flex flex-column justify-content-center">
            <div class="row h-100">
                <div class="col-lg-6 col-md-8 mx-auto mt-6">
                    <!-- form card login -->
                    <div class="card rounded shadow shadow-sm ">
                        <div class="card-header">
                            <h3 class="mb-0">Create new account </h3>
                        </div>
                        <div class="card-body">
                            <form class="form" role="form" autocomplete="off" id="formLogin" novalidate method="POST">
                                <div class="form-group">
                                    <label for="uname1">Email</label>
                                    <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required />
                                    <div class="invalid-feedback">Oops, you missed this one.</div>
                                </div>
                                <div class="form-group">
                                    <label for="uname1">Phone Number</label>
                                    <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required />
                                    <div class="invalid-feedback">Oops, you missed this one.</div>
                                </div>
                                <div class="form-group">
                                    <label for="uname1">Fullname</label>
                                    <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required />
                                    <div class="invalid-feedback">Oops, you missed this one.</div>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required autocomplete="new-password" />
                                    <div class="invalid-feedback">Enter your password too!</div>
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" id="pwd2" required autocomplete="new-password" />
                                    <div class="invalid-feedback">Enter your password too!</div>
                                </div>
                                <button type="submit" class="btn btn-success btn-lg float-right" id="btnLogin">Create Account</button>
                            </form>
                        </div>
                        <!--/card-block-->
                    </div>
                    <!-- /form card login -->
                </div>
            </div>
            <!--/row-->
        </div>
        <!--/col-->
    </div>
    <!--/row-->
</div>
</template>

<style scoped>
section {
    margin: auto;
    background-color: floralwhite;
}

.container {
    background-color: floralwhite;
}

.box {
    color: #fff;
    background: #7dc765;
    padding: 20px;
}
</style>
