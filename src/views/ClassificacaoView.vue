<script setup>
import { ref, reactive, onMounted } from 'vue'  
import ProdutosList from '@/components/ProdutosList.vue'
import Modal from '@/components/template/Modal.vue'

import categoriaService from '@/services/categoria.js'
import imageService from '@/services/images.js'
import produtoService from '@/services/produtos.js'

const categoria = ref([])
const coverUrl = ref('')
const file = ref(null)
const currentProduto = reactive({
  nome: '',
  preco: '',
  marca: '',
})

function onFileChange(e) {
  file.value = e.target.files[0]
  coverUrl.value = URL.createObjectURL(file.value)
}

async function save() {
  const image = await imageService.uploadImage(file.value)
  currentProduto.cover_attachment_key = image.attachment_key
  await produtoService.saveProduto(currentProduto)
  Object.assign(currentProduto, {
    id: '',
    nome: '',
    preco: '',
    marca: '',
    cover_attachment_key: ''
  })
  showForm.value = false
}

onMounted(async () => {
  const data = await categoriaService.getAllCategoria()
  categoria.value = data
})

const showForm = ref(false)
</script>

<template>
  <div class="row">
    <h2>Produtos</h2>
    <button class="addButton" @click="showForm = true">
      <PlusBoxIcon />
      Adicionar
    </button>
  </div>
  <ProdutosList />
  <modal :visible="showForm" @close="showForm = false">
    <template #header>
      <h3>Cadastro de Produtos</h3>
    </template>
    <template #body>
      <form class="form">
        <div class="row">
          <div id="preview">
            <input type="file" @change="onFileChange" />
            <div class="cover">
              <img v-if="coverUrl" :src="coverUrl" />
            </div>
          </div>
        </div>
        <div class="form-item">
          <input type="text" placeholder="Nome" id="nome" v-model="currentProduto.title" />
          <label for="title">Nome</label>
        </div>
        <div class="form-item">
          <input
            type="text"
            placeholder="Preco"
            id="year"
            v-model="currentProduto.year"
          />
          <label for="year">Preço</label>
        </div>
        <div class="form-item">
          <select v-model="currentProduto.rating">
            <option disabled value="">Quantidade </option>
            <option v-for="n in [0, 1, 2, 3, 4, 5]" :key="n" :value="n">
              {{ n }}
            </option>
          </select>
          <label for="year">Quantidade</label>
        </div>
      </form>
    </template>
    <template #footer>
      <div class="footerButtons">
        <button @click="showForm = false">Cancelar</button>
        <button class="saveButton" @click="save">Salvar</button>
      </div>
    </template>
  </modal>
</template>

<style scoped>
.addButton,
.saveButton {
  height: 2rem;
  align-self: center;
  margin-left: 3rem;
  background-color: #080;
  color: white;
  justify-content: space-around;
}

.footerButtons {
  display: flex;
}

.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  row-gap: 0.5rem;
}

#preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#preview .cover {
  width: 200px;
  height: 270px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
}

#preview img {
  width: 200px;
  height: 270px;
}
</style>
