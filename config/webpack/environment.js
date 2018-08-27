const { environment } = require('@rails/webpacker')
const vue =  require('./loaders/vue')

environment.loaders.append('vue', vue)

// environment.resolve = {
//   alias: {
//
//   }
// }

module.exports = environment
