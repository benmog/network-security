export const inputParams = [
    { title: 'מספר כרטיס', inputs: [{ key: 'cardNumber', placeholder: 'xxxx xxxx xxxx xxxx', validation: (str) =>
                new RegExp('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$').test(str.split(' ').join('')) // eslint-disable-line
        }] },
    { title: 'תאריך תפוגה', inputs: [{ key: 'cardYearMonth', placeholder: 'YY', width: '90%' , validation: (str) => str.length === 2 && !isNaN(+str) }, { key: 'cardExpMonth', width: '90%' , align: 'flex-end', placeholder: 'MM', validation: (str) => str.length === 2 && !isNaN(+str) } ] },
    { title: 'CVV', inputs: [{key: 'cvv', placeholder: '', validation: (str) => {
                return str.length === 3 && !isNaN(+str);
            }}]},
    { title: 'תעודת זהות', inputs: [{ key: 'id', placeholder: '',  validation: (str) => str.length === 9}] },
]