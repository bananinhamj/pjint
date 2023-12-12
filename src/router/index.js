import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassificacaoView from '../views/ClassificacaoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadastro',
      name: 'classificacao',  
      component: ClassificacaoView
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('../views/ProdutosView.vue')
    }
  ]
})

export default router
