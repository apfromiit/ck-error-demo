import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/HomeComponent.vue'
import DemoWithOneEditor from '@/components/DemoWithOneEditor'
import DemoWithTwoEditors from '@/components/DemoWithTwoEditors'
import DemoWithThreeEditors from '@/components/DemoWithThreeEditors'

const routes = [
  { path: '/', component: Home },
  { path: '/demo-with-one-editor', component: DemoWithOneEditor },
  { path: '/demo-with-two-editors', component: DemoWithTwoEditors },
  { path: '/demo-with-three-editors', component: DemoWithThreeEditors },
  { path: "/:catchAll(.*)", component: Home }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
