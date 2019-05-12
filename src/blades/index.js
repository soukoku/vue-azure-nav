const routes = []

const requireComponent = require.context(
  // The relative path
  './',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /index.js$/
)

requireComponent.keys().forEach(filePath => {
  const exported = requireComponent(filePath).default
  if (Array.isArray(exported)) {
    routes.push(...exported)
  }
})

export default routes
