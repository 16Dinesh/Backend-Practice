const EventEmitter = require('events')
const { emitWarning } = require('process')

// console.log(EventEmitter)

const emitter = new EventEmitter()

emitter.on("greet", (data) => {
    console.log(`Hello ${data}`)
})

emitter.emit('greet', "dinesh")