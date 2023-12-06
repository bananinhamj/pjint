<script setup>
import HeaderComp from '@/components/template/HeaderComp.vue'
</script>

<template>
  <HeaderComp />
  <div class="logo">
      <h1><img src=""></h1>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  .logo{
    text-align: center;
    width: 14px;
    height:5px;
    margin: 10px;
    padding: 5px;
  }

</style>
