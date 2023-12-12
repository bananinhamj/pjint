<!-- eslint-disable no-undef -->
<script setup>
import { ref, onMounted } from 'vue'
import bebidaService from '@/services/bebidas.js'

const bebidas = ref([])

onMounted(async () => {
  const data = await bebidaService.getAllBebidas()
  bebidas.value = data
})
</script>

<template>
  <div class="row wrap">
    <div v-for="bebida in bebidas" :key="bebida.id" class="card">
      <img :src="bebida.capa.url" :alt="bebida" />
      <div class="bebida-detail">
        <h3>{{ bebida.description }}</h3>
        <div class="descricao">
          <p>{{ bebida.nome }}</p>
          <p><strong>R$</strong> {{  bebida.preco }}</p>
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