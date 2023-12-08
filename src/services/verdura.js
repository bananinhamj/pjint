import api from '../plugins/api'

class VerduraService {
  async getAllVerduras(){
    const response = await api.get('/verduras/')
    return response.data
  }
  async saveMovie(verdura) {
    let response
    if (verdura.id) {
      response = await api.put(`/verduras/${verdura.id}/`, verdura)
    } else {
      response = await api.post('/verduras/', verdura)
    }
    return response.data
  }
}

export default new VerduraService()
    