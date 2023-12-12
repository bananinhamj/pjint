<script setup>
import { ref, onMounted } from 'vue'
import frutaService from '@/services/fruta.js'

const frutas = ref([])

onMounted(async () => {
  const data = await frutaService.getAllFrutas()
  frutas.value = data
})
</script>

<template>
  <div class="row wrap">
    <div v-for="fruta in frutas" :key="fruta.id" class="card">
      <img :src="fruta.capa.url" :alt="fruta" />
      <div class="fruta-detail">
        <h3>{{ fruta.description }}</h3>
        <div class="descricao"> 
          <p>{{ fruta.nome }}</p>
          <p><strong>R$</strong> {{   fruta.preco }}</p>
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