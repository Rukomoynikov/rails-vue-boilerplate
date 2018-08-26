import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/pages/Home.vue'),
    name: 'Home'
  },
  {
    path: '/customers',
    component: () => import('../components/pages/Customers.vue'),
    name: 'Customers'
  },
  {
    path: '/suppliers',
    component: () => import('../components/pages/Suppliers.vue'),
    name: 'Suppliers'
  },
  {
    path: '/suppliers/:id',
    component: () => import('../components/pages/Supplier.vue'),
    name: 'Supplier'
  }
]

const router = new VueRouter({
  routes,
  activeClass: 'is-active'
})

export default router
