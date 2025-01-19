const EventEmitter = require('events')

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total,productos) => {
    console.log(`Compra realizada $${total}\nCantidad de productos: ${productos}`);
})
emisorProductos.emit('compra',500,4);