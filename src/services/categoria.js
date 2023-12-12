import api from '../plugins/api'

class CategoriaService {
  async getAllClasse() {
    const response = await api.get('/categoria/')
    return response.data
  }
  async saveCategoria(categoria) {
    let response
    if (categoria.id) {
      response = await api.put(`/categoria/${categoria.id}/`, categoria)
    } else {
      response = await api.post('/categoria/', categoria)
    }
    return response.data
  }
  async deleteCategoria(categoria) {
    const response = await api.delete(`/categoria/${categoria.id}/`)
    return response.data
  }
}

export default new CategoriaService()
