<script setup>
import { ref, onMounted } from 'vue'

import produtoService from '@/services/produtos.js'

const produtos = ref([])

onMounted(async () => {
  const data = await produtoService.getAllProdutos()
  produtos.value = data
})
</script>

<template>
  <div class="row wrap">
    <div v-for="produto in produtos" :key="produto.id" class="card">
      <img :src="produto.capa.url" :alt="produto.nome" />
      <div class="produto-detail">
        <h3>{{ produto.nome }}</h3>
        <div class="produto-rating">
          <p>{{ produto.quantidade }}</p>
          <div class="rating">
            <StarIcon v-for="n in produto.preco" :key="n" fillColor="orange" size="18" />
            <StarIcon v-for="n in 5 - produto.preco" :key="n" fillColor="gray" size="18" />
          </div>
        </div>
        <p>{{ produto.marca}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 200px;
  height: 400px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.produto-detail p {
  margin: 0;
}

.produto-rating {
  display: flex;
  column-gap: 2rem;
}

.produto-detail h3 {
  margin: 0;
  font-size: 1.2rem;
}
</style>
