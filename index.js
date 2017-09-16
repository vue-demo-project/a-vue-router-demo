const Foo = { template: '<div>这里是foo</div>' }
const Bar = { template: '<div>这里是bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')