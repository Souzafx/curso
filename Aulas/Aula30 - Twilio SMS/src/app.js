import express from 'express';
import nodemailer from 'nodemailer';
import twilio from 'twilio'

const app = express();
const PORT = 8080;

 const TWILIO_ACCOUNT_SID =
 const TWILIO_AUTH_

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: '',
        pass: ''
    }
});

app.get('/email', (req, res) => {
    let result = transport.sendMail({
        from: '',
        to: '',
        subject: 'Teste de envio de email',
        html: `
        <div>
        <h1>Teste de envio de email</h1>
        <img src="cid:coder" />
        </div>`,
        attachments: [
            {
                filename: 'coderhouse.png',
                path:'./image/coderhouse.png',
                cid: 'coder'
            }
        ]
    });

    res.send('Email enviado com sucesso!');
});

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});