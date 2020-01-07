<template>
<nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://en.wikipedia.org/wiki/Water">
      <img src="../assets/water-brand.png" alt="Water Club" width="225" height="75">
    </a>
    <!-- Hamburger Menu -->
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-start">
        <a class="navbar-item">Home</a>
        <v-dialog/>
        <a class="navbar-item" @click="show">Payment</a>
    </div>

    <div class="navbar-end">
        <!-- navbar items -->
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'app-navbar',

    methods: {
      show () {
        this.$modal.show('dialog', {
          title: "Payments",
          text: 
          `<b>Cash App</b>: $DolanJack
          <br/>
          <b>Venmo</b>: @RollinDolan
          <br/>
          <b>Bitcoin</b>: 3G1GnsV4NqtojCz2GaiNwNgQ8tpVsY8iVS
          <br/>
          <b>Cash</b>: Yes
          <br/>
          <b>Check</b>: No`
        })
      },
    }
}

// ### Start script to automatically toggles burger menu and navbar menu as is-active
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        // UNCOMMENT 2 LINES BELOW IF BURGER STOPS WORKING
        // const target = el.dataset.target;
        // const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        // UNCOMMENT 1 LINE BELOW IF BURGER STOPS WORKING
        // $target.classList.toggle('is-active');

      });
    });
  }

});
// ### End script to automatically toggles burger menu and navbar menu as is-active
</script>

<style scoped>
.vue-dialog {
  color: #363636;
}
</style>