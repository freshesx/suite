class Suite {
  constructor (elements, options) {
    if (!Array.isArray(elements) elements = [elements]
    this.elements = elements
    this.options = options
  }

  install (Vue, options) {
    this.elements.forEach(elementMap => {
      Object.keys(elementMap).forEach(name => {
        Vue.component(name, elementMap[name])
      })
    })
  }
}
