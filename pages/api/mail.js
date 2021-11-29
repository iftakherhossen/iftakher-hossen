const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

const body = JSON.parse(req.body);
console.log('body', body);

const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
`;

mail.send({
    to: 'to.name@email.com',
    from: 'from.name@email.com',
    subject: 'New Message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
});

mail.send({
    to: 'to.name@email.com',
    from: 'from.name@email.com',
    subject: 'New Message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
}).then(() => {
    res.status(200).json({ status: 'Ok' });
});