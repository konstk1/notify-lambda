'use strict';

require('dotenv').config();
const lambda = require('../index');
// const bundle = require('../z_index');

const event = {
};

console.log('Running lambda...');
lambda.handler(event).then(response => console.log('Response: ', response)).catch(err => console.log('Error: ', err));
// console.log(bundle);
// bundle.handler(event).then(response => console.log('Response: ', response)).catch(err => console.log('Error: ', err));


