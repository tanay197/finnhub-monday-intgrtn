const WebSocket = require('ws')
const socket = new WebSocket('wss://ws.finnhub.io?token=c4t2dbiad3icjlromh4g')

const stockSymbol = 'AAPL'
const stockTarget = 149

// Connection opened -> Subscribe
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
})

// Listen for messages
socket.addEventListener('message', function (event) {
    console.info('FINNHUB: ', event.data)
})

// Unsubscribe
 var unsubscribe = function(symbol) {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
}