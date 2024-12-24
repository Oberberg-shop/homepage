module.exports = {
    apps: [
      {
        name: 'NuxtOberbergShop',
        port: '4000',
        exec_mode: 'cluster',
        instances: 2,
        script: './.output/server/index.mjs'
      }
    ]
  }