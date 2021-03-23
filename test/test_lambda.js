'use strict';

require('dotenv').config();
const lambda = require('../index');
// const bundle = require('../z_index');

const body = {
  type: 'email',
  subject: 'Test subjection notification',
  text: 'Test body text',
  pin: 3891, // extra safety check (ala api key)
};

const event = {
    resource: '/notify',
    path: '/notify',
    httpMethod: 'POST',
    body: JSON.stringify(body),
  };

console.log('Running lambda...');
lambda.handler(event).then(response => console.log('Response: ', response)).catch(err => console.log('Error: ', err));
// setInterval(() => {
//   console.log(new Date().toLocaleString());
//   lambda.handler(event).then(response => console.log('Response: ', response)).catch(err => console.log('Error: ', err));
// }, 60000);
// console.log(bundle);
// bundle.handler(event).then(response => console.log('Response: ', response)).catch(err => console.log('Error: ', err));


