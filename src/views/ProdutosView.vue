<script setup>
  import CardFruta from '../components/Cards/CardFruta.vue';
  import CardBebida from '../components/Cards/CardBebida.vue';
  import CardCarne from '../components/Cards/CardCarne.vue';
  import { ref, onMounted } from 'vue'
  import frutaService from '@/services/fruta.js'
  import bebidaService from '@/services/bebidas.js'
  import carneService from '@/services/carne.js'

  const frutas = ref([])

  onMounted(async () => {
    const data = await frutaService.getAllFrutas()
    frutas.value = data
    
  },)     
  
  const bebidas = ref([])
    onMounted(async () => {
    const data = await bebidaService.getAllBebidas()
    bebidas.value = data
  })
  const carnes = ref([])
    onMounted(async () => {
    const data = await carneService.getAllCarnes()
    carnes.value = data
  })
 
</script>

<template>
  <CardFruta />  
  <CardBebida/>
  <CardCarne/>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
