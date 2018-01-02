const Suite from './Suite'

module.exports = function suite(elements, options) {
  return new Suite(elements, options)
}