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
        <div class="movie-year-rating">
          <p>{{ fruta.nome }}</p>
        </div>
        <p>R$ {{   fruta.preco }}</p>
      </div>
    </div>
  </div>
    <div class="container">
        <img class="cardproduto" src="" />
        <div>
            <div class="overlay">
                <h4 class="Produto">aaaaaaaaa</h4>
                <button>VER MAIS</button>
<!--                 <router-link :to="UrlDoProduto(LinkProduto.id)">
                </router-link> -->
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