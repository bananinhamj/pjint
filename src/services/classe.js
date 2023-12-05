import api from '../plugins/api'

class ClasseService {
  async getAllClasse() {
    const response = await api.get('/classe/')
    return response.data
  }
  async saveClasse(classe) {
    let response
    if (classe.id) {
      response = await api.put(`/classe/${classe.id}/`, classe)
    } else {
      response = await api.post('/classe/', classe)
    }
    return response.data
  }
  async deleteGenre(classe) {
    const response = await api.delete(`/classe/${classe.id}/`)
    return response.data
  }
}

export default new ClasseService()
