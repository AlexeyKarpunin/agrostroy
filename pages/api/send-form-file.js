const nodemailer = require('nodemailer');

function validation(name, phone, typeBuild='', targetBuild='', info='') {

  if (name.length < 2) {return 'incorrect name';}
  if (typeof name !== 'string') {return 'incorrect name';}

  if (phone.length < 12) {return 'incorrect phone'}
  if (typeof phone !== 'string') {return 'incorrect phone';}
  if (phone.split('').filter( (num) => num !== '_' ).length < 12) {return 'incorrect phone';}
  
  if(typeof typeBuild !== 'string') {return 'incorrect type build'}
  if(typeBuild.length > 120) {return 'incorrect type build'}
  if(typeof targetBuild !== 'string') {return 'incorrect target build'}
  if(targetBuild.length > 120) {return 'incorrect type build'}

  if (typeof info !== 'string') {return 'incorrect information'}
  if (info.length > 600) {return 'incorrect information'}

  return 'success';
}

export default async (req, res) => {
  const {name, phone, typeBuild, targetBuild, fileLink, information } = req.body;

  const massege = `
  <ul style=''>
    <li>name:  ${name} </li>
    <li>phone:  ${phone} </li>
    <li>type build:  ${typeBuild} </li>
    <li>target build:  ${targetBuild} </li>
    <li>information:  ${information} </li>
  </ul>
  `;

  const options = {
    from: '"АгростроительЮг" <АгростроительЮг@example.com>',
    to: 'info@bzcekh.ru', // info@bzcekh.ru
    subject: 'Message from АгростроительЮг',
    text: 'This message was sent from АгростроительЮг.',
    html: massege,
  }

  const validationStatus = validation(name, phone, typeBuild, targetBuild, information);
  
  if(fileLink){options.attachments = [{ path: fileLink }]}

  if (validationStatus === 'success') {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'alexkarpuninaa@gmail.com',
          pass: 'jgkgsnbsebqskirr'
        }
    });

    const result = await transporter.sendMail(options);
  
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

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

