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
          <p><strong>R$</strong> {{  carne.preco }}</p>
        </div>
      </div>
    </div>
  </div>
  
</template>


<style scoped>
img {
  height: 20vh;
  border-radius: 8px;
}

h4 {
  height: 3rem;
}

.card {
  background-color: red;
  margin: 1vh;

  width: 20vh;
  height: 30vh;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}

.descricao {
  margin-left: 1vh;
  font-family: Arial, Helvetica, sans-serif;
}

</style>    