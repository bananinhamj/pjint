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
        </div>
        <p>R$ {{  bebida.preco }}</p>
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