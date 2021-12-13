const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./../Api/db.json');

console.log(router)

const middlewares = jsonServer.defaults({
  static: './build'
});

const PORT = process.env.PORT || 5000;

server.use(middlewares);

server.use(router);

server.listen(PORT, () => {
  console.log('Servidor listo: ' , PORT);
});