<script>
export default {
    props: {
      poster: String,
      titulo: String,
      LinkFilme: {
        type: Object,
      },
    },
    methods: {
      UrlDoProduto(id) {
        return `/produtos/${id}`;
      },
    },
  };</script>
<template>
    <div class="container">
        <img class="cardproduto" :src="poster" />
        <div>
            <div class="overlay">
                <h4 class="Produto">{{ titulo }}</h4>
                <router-link :to="UrlDoProduto(LinkProduto.id)">
                <button>VER MAIS</button>
                </router-link>
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