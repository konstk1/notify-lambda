const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");


const ses = new SESClient({ region: 'us-east-1' });

async function notify(email, subject, body) {
  // Set the parameters
  const params = {
    Destination: {
      /* required */
      // CcAddresses: [
      //   /* more items */
      // ],
      ToAddresses: [
        email,
      ],
    },
    Message: {
      Body: {
        /* required */
        Text: {
          Charset: "UTF-8",
          Data: body,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: process.env.NOTIFY_EMAIL_FROM,
  };

  try {
    const data = await ses.send(new SendEmailCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = {
  notify,
};
