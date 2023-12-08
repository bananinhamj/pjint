import api from '../plugins/api'

class CarneService {
  async getAllProdutos(){
    const response = await api.get('/carnes/')
    return response.data
  }
  async saveMovie(carne) {
    let response
    if (carne.id) {
      response = await api.put(`/carnes/${carne.id}/`, carne)
    } else {
      response = await api.post('/carnes/', carne)
    }
    return response.data
  }
}

export default new CarneService()
