var nodemailer = require('nodemailer');
const fs = require('fs');

// read the file containing the email addresses
module.exports = () => {
    fs.readFile('utils/email-addresses.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err.message);
            throw err
        }


// split the data string into an array of email addresses
        const emailAddresses = data.split('\n');

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'pay.post.bgu.ac.il@gmail.com',
                pass: 'iwigsvfspzipwawb'
            }
        });

        // iterate over the email addresses and send an email to each one
        emailAddresses.forEach((emailAddress) => {
            transporter.sendMail({
                from: '"אוניברסיטת בן גוריון <nokonok@gmail.com>', // sender address
                to: emailAddress, // list of receivers
                subject: "עדכון ציון במבחן סמסטר חורף 2022/2023", // Subject line
                text: "עדכון ציון במבחן סמסטר חורף 2022/2023", // plain text body
                html: `<table border="0" cellpadding="0" cellspacing="0" dir="rtl" id="m_-4938741528032708450gmail-m_-1730008892290791498container" style="background:white; border-collapse:collapse; min-width:600px; width:450.0pt">
                <tbody>
                   <tr>
                      <td style="width:100.0%">
                      <table border="0" cellpadding="0" cellspacing="0" dir="rtl" style="border-collapse:collapse; width:100.0%">
                         <tbody>
                            <tr>
                               <td style="vertical-align:top"><img class="CToWUd" src="https://ci5.googleusercontent.com/proxy/LvmmZD0kC_n3X1B2oJrBIS5Y3WZ3lXqs6EYwa1aZ9-ZOgVgaI6mrZ1fgvDnwZ0lK3TfXV4XMV6NxftoN1Jol6GOPb2DWXXx32x_-fihAaGVTgmseH0r87Gvb7rpUzQVtzSQkvqEBDA4=s0-d-e1-ft#https://content.viplus.com/bengurionMKT/Content/eng_heb_standard_logo_BGU_600x155.png" /></td>
                            </tr>
                         </tbody>
                      </table>
             
                      <p style="text-align:right"><span style="color:black">&nbsp;</span></p>
             
                      <table border="0" cellpadding="0" cellspacing="0" dir="rtl" style="border-collapse:collapse; width:100.0%">
                         <tbody>
                            <tr>
                               <td style="background-color:#ff8a00">
                               <p style="text-align:center"><span style="color:#000000"><strong>עדכון ציון במבחן, סמסטר חורף&nbsp;2022/2023</strong></span></p>
                               </td>
                            </tr>
                         </tbody>
                      </table>
             
                      <p style="margin-left:0; margin-right:0; text-align:right"><span style="color:black">&nbsp;</span></p>
             
                      <table border="0" cellpadding="0" cellspacing="0" dir="rtl" style="border-collapse:collapse; width:100.0%">
                         <tbody>
                            <tr>
                               <td style="vertical-align:top">
                               <table border="0" cellpadding="0" cellspacing="0" dir="rtl" style="border-collapse:collapse; width:450.0pt">
                                  <tbody>
                                     <tr>
                                        <td style="vertical-align:top; width:450.0pt">
                                        <p><img class="CToWUd a6T" src="https://ci5.googleusercontent.com/proxy/D6r31PJXTjzudDqpElQd1j2RkciKwNuryFaUpT-GsUM6F8p65V1GpUh--KDqj_LQP7qJFfJtN-0DBIyHwoBxxPFEwz2iwBjzEEgMppFEFtEDC2AkSV2IBk_xPYB5xzUq=s0-d-e1-ft#https://content.viplus.com/bengurionMKT/Content/28-11-2017_240_600x400(1).jpg" style="float:right; height:2.5104in; width:6.25in" /></p>
             
                                        <p>&nbsp;</p>
                                        </td>
                                     </tr>
                                  </tbody>
                               </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
             
                      <p style="text-align:right"><span style="color:black">&nbsp;</span></p>
             
                      <table border="0" cellpadding="0" cellspacing="0" dir="rtl" style="border-collapse:collapse; width:100.0%">
                         <tbody>
                            <tr>
                               <td style="background-color:#d7d7d7; border-color:#999999; border-style:solid; border-width:2.25pt">
                               <p style="text-align:left"><span style="color:black"><a href="https://in.bgu.ac.il/en/Pages/paying-tuition.aspx" target="_blank"><span style="color:black">For the English version &gt;&gt;</span></a></span></p>
                               </td>
                            </tr>
                            <tr>
                               <td style="background-color:#d7d7d7; border-color:#999999; border-style:solid; border-top:none; border-width:2.25pt; height:177.25pt">
                               <p style="text-align:right"><strong><span style="color:black; font-family:&quot;Calibri&quot;,sans-serif">סטודנטים יקרים, </span></strong></p>
             
                               <p style="text-align:right"><strong><span style="color:black; font-family:&quot;Calibri&quot;,sans-serif">ברצוננו לידע אתכם כי הועלה ציון חדש למבחן שהתרחש בתאריך 22/01/22.</span></strong><br />
                               <strong><span style="color:black; font-family:&quot;Calibri&quot;,sans-serif">עליכם לעבור על טופס המבחן ובמידה וברצונכם לערער על הבדיקה, תוכלו לעשות זאת עד לתאריך ה-25/01/22.</span></strong></p>
             
                               <p style="text-align:right"><strong><u><span style="color:black; font-family:&quot;Calibri&quot;,sans-serif">באזור האישי שלכם תמצאו את ציוני המבחנים לסמסטר זה:</span></u></strong></p>
             
                               <p style="margin-left:18.75pt; margin-right:18.75pt; text-align:right"><span style="color:black; font-family:Symbol; font-size:10.0pt">&middot;</span><span style="color:black; font-family:&quot;Times New Roman&quot;,serif; font-size:7.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="color:black">גיליון ציונים סמסטר חורף 2022/2023&nbsp;- &nbsp;<a href="http://localhost:8080/#/bgu" target="_blank">לחצו כאן</a></span></p>
             
                               <p style="text-align:right"><strong><span style="color:black; font-family:&quot;Calibri&quot;,sans-serif">להזכירכם: ניתן לערער עד לתאריך ה25/01/2022</span></strong></p>
             
                               <p style="text-align:right"><strong>סריקות של מחברות הבחינה יועלו עד ל-24 שעות מפרסום הציונים. במידה ולא הועלתה מחברת הבחינה עד לתום תאריך הערעור, הנכם מתבקשים לפנות למזכירות המחלקה למדעי המחשב, בניין 37.</strong></p>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                      </td>
                   </tr>
                </tbody>
             </table>`
            })
        })
    });
}

