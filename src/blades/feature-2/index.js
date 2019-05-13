export default [
  {
    name: 'feature-2',
    path: 'feature-2',
    component: () => import(/* webpackChunkName: "feature-2" */ './index.vue'),
    children: [
      {
        name: 'feature-2-sub-1',
        path: 'sub-1',
        component: () =>
          import(/* webpackChunkName: "feature-2" */ './sub-1.vue')
      }
    ]
  }
]
