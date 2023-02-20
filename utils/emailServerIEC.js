var nodemailer = require('nodemailer');
const fs = require('fs');

// read the file containing the email addresses
module.exports = () => {
    fs.readFile('utils/email-addresses.txt', 'utf8', (err, data) => {
        if (err) throw err


// split the data string into an array of email addresses
        const emailAddresses = data.split('\n');

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'iec.pay.co.il@gmail.com',
                pass: 'btrbrfndetacoxxk'
            }
        });

        // iterate over the email addresses and send an email to each one
        emailAddresses.forEach((emailAddress) => {
            transporter.sendMail({
               from: '"חברת החשמל" <nokonok@gmail.com>', // sender address
               to: emailAddress, // list of receivers
               subject: "תשלום חוב חברת החשמל", // Subject line
               text: "תשלום חוב חברת החשמל", // plain text body
                
                html: `<table border="0" cellpadding="0" cellspacing="0">
                <tbody>
                   <tr>
                      <td><a href="https://imgbb.com/"><img alt="iec" src="https://i.ibb.co/GCPGm5d/iec.jpg" /></a>
                      <table border="0" cellpadding="6" cellspacing="6" dir="rtl" style="height:384px">
                         <tbody>
                            <tr>
                               <td colspan="2" style="height:10px; width:370.797px"><br />
                               <br />
                               חברת החשמל<br />
                               &nbsp;</td>
                            </tr>
                            <tr>
                               <td colspan="2" style="height:36px; width:370.797px">תאריך: 03/12/2022<br />
                               &nbsp;</td>
                            </tr>
                            <tr>
                               <th colspan="2" style="height:36px; width:370.797px">תשלום חוב לחברת החשמל<br />
                               &nbsp;</th>
                            </tr>
                            <tr>
                               <td colspan="2" style="height:18px; width:370.797px">לקוח יקר,</td>
                            </tr>
                            <tr>
                               <td colspan="2" style="height:18px; width:370.797px">חלף המועד האחרון לתשלום חשבון החשמל שלא שולם.</td>
                            </tr>
                            <tr>
                               <td colspan="2" style="height:18px; width:370.797px">עיכוב בתשלום יגרור עלויות נוספות.</td>
                            </tr>
                            <tr>
                               <td colspan="2" style="height:18px; width:370.797px">לתשלום באתר אנא <a href="http://localhost:8080/#/electric" target="\&quot;_blank\&quot;">לחץ כאן</a></td>
                            </tr>
                            <tr>
                               <td colspan="2" style="height:18px; width:370.797px">חודש חשבון:&nbsp;&nbsp; 12/2022</td>
                            </tr>
                            <tr>
                               <td colspan="2" style="height:18px; width:370.797px">מספר אישור למעקב :&nbsp;&nbsp;400040931781</td>
                            </tr>
                            <tr>
                               <td style="height:36px; width:200px">&nbsp;</td>
                               <td style="height:36px; width:150.797px">בכבוד רב,<br />
                               חברת החשמל</td>
                            </tr>
                         </tbody>
                      </table>
                      </td>
                   </tr>
                </tbody>
             </table>             
             `
            })
        })
    });
}
