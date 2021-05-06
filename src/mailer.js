const nodemailer = require("nodemailer")

async function crearTransporter(config){
    const transporter = nodemailer.createTransport({  
      service:"Gmail",  
      auth: {
          user: config.user, // generated ethereal user
          pass: config.pass, // generated ethereal password
        }
      })
      
      
    return {
      enviar:async(mailOptions)=>{
         transporter.sendMail(mailOptions,(error,info)=>{
         if(error){
         console.log(console.log(error))
         }else{
         console.log("mail enviado correctamente")}
      })
    }}
}
module.exports={crearTransporter}