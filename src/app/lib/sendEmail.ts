const sendEmail = async (email: string, name: string, message: string) => {
  return await fetch('/api/send-mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name, message }),
  });
};

export default sendEmail;
