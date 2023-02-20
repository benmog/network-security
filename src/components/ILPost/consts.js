export const inputParams = [
    { title: 'מספר טלפון', inputs: [{ key: 'phoneNumber', placeholder: '' }] },
    { title: 'אימייל', inputs: [{ key: 'email', placeholder: '' }] },
    { title: 'מספר כרטיס', inputs: [{ key: 'cardNumber', placeholder: 'xxxx xxxx xxxx xxxx', validation: (str) =>
                new RegExp('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$').test(str.split(' ').join('')) // eslint-disable-line
            }] },
    { title: 'תאריך תפוגה', inputs: [{ key: 'cardYearMonth', placeholder: 'YY', validation: (str) => str.length === 2 && !isNaN(+str) }, { key: 'cardExpMonth', placeholder: 'MM', validation: (str) => str.length === 2 && !isNaN(+str) } ] },
    { title: 'CVV', inputs: [{key: 'cvv', placeholder: '', width: '50%', validation: (str) => {
                return str.length === 3 && !isNaN(+str);
    }}]},
    { title: 'תעודת זהות', inputs: [{ key: 'id', placeholder: '', width: '50%' , validation: (str) => str.length === 9}] },
]