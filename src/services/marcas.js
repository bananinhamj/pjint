import api from '../plugins/api'

class MarcaService {
  async getAllMarcas() {
    const response = await api.get('/marcas/')
    return response.data
  }
  async saveMarca(marca) {
    let response
    if (marca.id) {
      response = await api.put(`/marcas/${marca.id}/`, marca)
    } else {
      response = await api.post('/marcas/', marca)
    }
    return response.data
  }
  async deleteMarca(marca) {
    const response = await api.delete(`/marcas/${marca.id}/`)
    return response.data
  }
}

export default new MarcaService()
