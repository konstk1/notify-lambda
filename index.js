
const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");
const cvs = require('./cvs');

const sns = new SNSClient({ region: 'us-east-1' });

async function notifyBySms(message) {
  var params = {
    Message: message,
    PhoneNumber: process.env.NOTIFY_PHONE,
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

exports.handler = async (event) => {

  const newOption = await cvs.checkEligibilityQs();
  if (newOption) {
    console.log(newOption);
    await notifyBySms(`New option: ${newOption}`);
  }

  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
