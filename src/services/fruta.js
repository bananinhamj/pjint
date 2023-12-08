import api from '../plugins/api'

class FrutaService {
  async getAllFrutas(){
    const response = await api.get('/frutas/')
    return response.data
  }
  async saveMovie(fruta) {
    let response
    if (fruta.id) {
      response = await api.put(`/frutas${fruta.id}/`, fruta)
    } else {
      response = await api.post('/frutas/', fruta)
    }
    return response.data
  }
}

export default new FrutaService()
