type EmailRequest = {
  email: string;
  name: string;
  message: string;
};

const sendEmail = async ({ email, name, message }: EmailRequest) => {
  return await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name, message }),
  });
};

export default sendEmail;
