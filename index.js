const sms = require('./src/sms');
const email = require('./src/email');
const cvs = require('./cvs');

exports.handler = async (event) => {

  const newOption = await cvs.checkEligibilityQs();
  if (newOption) {
    console.log(newOption);
    // await sms.notify(process.env.NOTIFY_PHONE, `New option: ${newOption}`);
  }

  // await email.notify(process.env.NOTIFY_EMAIL_TO, "Notification", "Test data");

  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
