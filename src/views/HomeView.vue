<script setup>
  import CardFruta from '../components/Cards/CardFruta.vue';
  import { ref, onMounted } from 'vue'
  import frutaService from '@/services/fruta.js'

  const frutas = ref([])

  onMounted(async () => {
    const data = await frutaService.getAllFrutas()
    frutas.value = data
  })
</script>

<template>
  <CardFruta />  
</template>

<style scoped></style>
