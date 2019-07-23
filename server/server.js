// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const path = require('path')
const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const creds = require('../config/config')
const sgMail = require('@sendgrid/mail');



router.post('/', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const reason = req.body.reason
  const content = req.body.content
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
  to: 'mrogulik@gmail.com',
  from: email,
  subject: reason,
  text: `${name} ${content}`,
};
sgMail.send(msg);

})





const app = express()
const publicPath = path.join(__dirname,'..','public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath))



app.listen(port,()=>{
    
})