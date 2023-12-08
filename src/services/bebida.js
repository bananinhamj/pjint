import api from '../plugins/api'

class BebidaService {
  async getAllBebidas(){
    const response = await api.get('/bebidas/')
    return response.data
  }
  async saveMovie(bebida) {
    let response
    if (bebida.id) {
      response = await api.put(`/bebidas/${bebida.id}/`, bebida)
    } else {
      response = await api.post('/bebidas/', bebida)
    }
    return response.data
  }
}

export default new BebidaService()
