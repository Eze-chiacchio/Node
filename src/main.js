const {crearTransporter}= require('../src/mailer.js')
const to='acuvapu-5272@yopmail.com'
const mailOptions={
    from:'carlitos@mail.com',
    to: to, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body

  }
async function main(){
    try{
const transporter= await crearTransporter()
transporter.enviar(mailOptions)
}catch(error){
    console.log(error)
}
}
main()