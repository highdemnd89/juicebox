const apiRouter = require('./api');
server.use('/api', apiRouter);
const morgan = require('morgan');
server.use(morgan('dev'));

server.use(express.json())