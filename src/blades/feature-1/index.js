export default [
  {
    name: 'feature-1',
    path: 'feature-1',
    component: () => import(/* webpackChunkName: "feature-1" */ './index.vue'),
    children: [
      {
        name: 'feature-1-sub-1',
        path: 'sub-1',
        component: () =>
          import(/* webpackChunkName: "feature-1" */ './sub-1.vue')
      },
      {
        name: 'feature-1-sub-2',
        path: 'sub-2',
        component: () =>
          import(/* webpackChunkName: "feature-1" */ './sub-2.vue')
      }
    ]
  }
]
