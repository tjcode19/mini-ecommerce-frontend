<template>
  <section>
    <app-login v-if="isLoginView"></app-login>
    <app-register v-if="isRegisterView"></app-register>
  </section>
</template>
<script>
import Login from "./Login";
import Register from "./Register";

export default {
    data: function(){
        return{
            isLoginView: true,
            isRegisterView: false
        };
    },
  components: {
    "app-login": Login,
    "app-register": Register,
  },
};
</script>