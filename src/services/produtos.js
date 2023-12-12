import api from '../plugins/api'

class ProdutoService {
  async getAllProdutos(){
    const response = await api.get('/produtos/')
    return response.data
  }
  async saveProduto(produto) {
    let response
    if (produto.id) {
      response = await api.put(`/produtos/${produto.id}/`, produto)
    } else {
      response = await api.post('/produtos/', produto)
    }
    return response.data
  }
}

export default new ProdutoService()
