<template>
  <section class="main">
    Main
    <div class="good">
      {{goodlist}}
    </div>
  </section>
</template>

<script>
  export default {
    props: ['goodlist']
  }
</script>

<style>
  .main {
    position: relative;
    display: block;
    background: blue;
  }
</style>