export default [
  {
    name: 'feature-1',
    path: 'feature-1',
    component: () => import(/* webpackChunkName: "feature-1" */ './index.vue')
  }
]
