export default [
  {
    name: 'feature-2',
    path: 'feature-2',
    component: () => import(/* webpackChunkName: "feature-2" */ './index.vue')
  }
]
