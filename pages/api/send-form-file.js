const nodemailer = require('nodemailer');
const fs = require('fs');

function validation(name, phone, typeBuild='', targetBuild='') {

  if (name.length < 2) {return 'incorrect name';}
  if (typeof name !== 'string') {return 'incorrect name';}

  if (phone.length < 12) {return 'incorrect phone'}
  if (typeof phone !== 'string') {return 'incorrect phone';}
  if (phone.split('').filter( (num) => num !== '_' ).length < 12) {return 'incorrect phone';}
  
  if(typeof typeBuild !== 'string') {return 'incorrect type build'}
  if(typeBuild.length > 120) {return 'incorrect type build'}
  if(typeof targetBuild !== 'string') {return 'incorrect target build'}
  if(targetBuild.length > 120) {return 'incorrect type build'}

  return 'success';
}

export default async (req, res) => {
  const {name, phone, typeBuild, targetBuild, file } = req.body;

  const massege = `
  <ul style=''>
    <li>name:  ${name} </li>
    <li>phone:  ${phone} </li>
    <li>type build:  ${typeBuild} </li>
    <li>target build:  ${targetBuild} </li>
  </ul>
  `;

  const validationStatus = validation(name, phone, typeBuild, targetBuild);

  if (validationStatus === 'success') {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'alexkarpuninaa@gmail.com',
          pass: 'jgkgsnbsebqskirr'
        }
    });
    console.log('files', file)
    const result = await transporter.sendMail({
      from: '"АгростроительЮг" <АгростроительЮг@example.com>',
      to: 'alexkarpuninaa@gmail.com', // info@bzcekh.ru
      subject: 'Message from АгростроительЮг',
      text: 'This message was sent from АгростроительЮг.',
      html: massege,
      attachments: [{   // stream as an attachment
        filename: 'file from user',
        href: file
    }]
    });
  
    const status = await result;
  
    if (status) {
      res.json({message: 'success'})
    } else {
      res.json({message: 'server erorr'})
    }
  } else {
      res.json({message: validationStatus})
  }
 
}


