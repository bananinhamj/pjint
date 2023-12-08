<script>
export default {
    props: {
      imagem: String,
      nome: String,
      LinkProduto: {
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
        <img class="cardproduto" src="https://code.visualstudio.com/assets/images/home-git.svg" />
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