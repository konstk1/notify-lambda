const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

const sns = new SNSClient({ region: 'us-east-1' });

async function notify(phoneNumber, message) {
  var params = {
    Message: message,
    PhoneNumber: phoneNumber,
    MessageAttributes: {
      'AWS.SNS.SMS.SMSType': {
        StringValue: 'Transactional',
        DataType: 'String',
      }
    }
  };

  const publishCommand = new PublishCommand(params);

  try {
    const data = await sns.send(publishCommand);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  notify,
}