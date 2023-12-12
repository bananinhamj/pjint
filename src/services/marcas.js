import api from '../plugins/api'

class MarcaService {
  async getAllClasse() {
    const response = await api.get('/marca/')
    return response.data
  }
  async saveMarca(marca) {
    let response
    if (marca.id) {
      response = await api.put(`/marca/${marca.id}/`, marca)
    } else {
      response = await api.post('/marca/', marca)
    }
    return response.data
  }
  async deleteMarca(marca) {
    const response = await api.delete(`/marca/${marca.id}/`)
    return response.data
  }
}

export default new MarcaService()
