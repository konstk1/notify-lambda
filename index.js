const sms = require('./src/sms');
const email = require('./src/email');
const cvs = require('./cvs');

// sample post event
const sampleRequest = {
  type: 'email | sms',
  subject: 'can be empty, not used for sms',
  text: 'notification text',
  pin: 3891, // extra safety check (ala api key)
};

function buildResponse(statusCode, responseMessage) {
  return {
    statusCode: statusCode,
    body: JSON.stringify({ status: responseMessage }),
  };
}

exports.handler = async (event) => {
  let statusCode = 200;
  let responseMessage = 'OK';

  console.log(event);

  const body = JSON.parse(event.body);

  if (!body.pin || (body.pin != process.env.PIN)) {
    return buildResponse(403, 'Forbidden');
  }

  // validate notify body
  if (body.type == 'email') {
    console.log('Notifying by email');
    statusCode = await email.notify(process.env.NOTIFY_EMAIL_TO, body.subject, body.text);
  } else if (body.type == 'sms') {
    console.log('Notifying by SMS');
    // statusCode = await sms.notify(process.env.NOTIFY_PHONE, body.text);
  } else {
    return buildResponse(400, 'Invalid notification type')
  }

  return buildResponse(statusCode, statusCode == 200 ? 'Notification sent' : 'Notification failed');
};
