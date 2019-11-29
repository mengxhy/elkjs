const ELK = require('./elk-api.js').default

class ELKNode extends ELK {
  constructor(options = {}) {
    const optionsClone = Object.assign({}, options)
    
    // unless no other workerFactory is registered, use the fake worker
    if (!optionsClone.workerFactory) {
      const { Worker } = require('./elk-worker.min.js')
      optionsClone.workerFactory = function (url) { return new Worker(url) }
    }

    super(optionsClone)
  }
}

Object.defineProperty(module.exports, "__esModule", {
  value: true
})
module.exports = ELKNode
ELKNode.default = ELKNode
