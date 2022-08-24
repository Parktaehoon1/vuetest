<template>
  <div>
    <header>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">about</router-link>
      |
      <router-link to="/good/1">Good 1</router-link>
      |
      <router-link to="/good/2">Good 2</router-link>
      |
      <router-link to="/good/3">Good 3</router-link>
    </header>

    <div class="main">
    <router-view />
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>