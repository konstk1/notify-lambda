const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');


const ses = new SESClient({ region: 'us-east-1' });

const defaultSubject = 'Lambda Notification';

async function notify(email, subject = 'Lambda Notification', body) {
  // Set the parameters
  const params = {
    Source: process.env.NOTIFY_EMAIL_FROM,
    Destination: {
      ToAddresses: [
        email,
      ],
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: body,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
    },
  };

  try {
    const data = await ses.send(new SendEmailCommand(params));
    console.log('Email sending status: ', data.$metadata.httpStatusCode);
    return data.$metadata.httpStatusCode;
  } catch (err) {
    console.log('Email failed: ', err);
    return err.$metadata.httpStatusCode;
  }
};

module.exports = {
  notify,
};
