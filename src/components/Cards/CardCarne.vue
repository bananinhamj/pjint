<!-- eslint-disable no-undef -->
<script setup>
import { ref, onMounted } from 'vue'
import carneService from '@/services/carne.js'

const carnes = ref([])

onMounted(async () => {
  const data = await carneService.getAllCarne()
  carnes.value = data
})
</script>

<template>
  <div class="row wrap">
    <div v-for="carne in carnes" :key="carne.id" class="card">
      <img :src="carne.capa.url" :alt="carne" />
      <div class="carne-detail">
        <h3>{{ carne.description }}</h3>
        <div class="descricao">
          <p>{{ carne.nome }}</p>
        </div>
        <p>R$ {{  carne.preco }}</p>
      </div>
    </div>
  </div>
  
</template>


<style scoped>
img {
  height: 500px;
}

h4 {
  height: 3rem;
}
</style>    