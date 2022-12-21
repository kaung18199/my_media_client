<template>
    <div>
        <div class="d-flex justify-content-center py-3">
          <p class=" btn btn-danger text-white me-4" @click="home()">Home</p>
          <p class="btn bg-dark text-white" @click="login()" v-if="!tokenStatus">Login</p>
          <p class="btn bg-dark text-white" @click="logout()" v-if="tokenStatus">Logout</p>
        </div>

        <div class="container col-5 shadow my-3 p-5">
            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="userStatus">
              The Credentail Do Not Match!
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
                <legend class="mb-3">Login Form</legend>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="userData.email">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="userData.password">
              </div>

              <button type="submit" class="btn btn-primary mb-3" @click="accountLogin()">Login</button>

        </div>
    </div>
</template>

<script src="../js/loginPage.js">
</script>
