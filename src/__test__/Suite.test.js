import Suite from '../Suite.js'

describe('Suite', () => {
  const card = {
    'mn-card': { name: 'mn-card' },
    'mn-card-item': { name: 'mn-card-item' }
  }

  const btn = {
    'mn-btn': { name: 'mn-btn' }
  }

  test('#constructor with object', () => {
    const suite = new Suite(card)
    expect(suite.elements).toEqual(expect.arrayContaining([card]))
  })

  test('#constructor with array', () => {
    const suite = new Suite([ card, btn ])
    expect(suite.elements).toEqual(expect.arrayContaining([card, btn]))
  })

  test('#install', () => {
    const Vue = {
      component (name, component) {
        expect(name).toEqual('mn-btn')
      },
      use (plugin, options) {
        plugin.install(Vue, options)
      }
    }

    const suite = new Suite(btn)

    Vue.use(suite)
  })
})
