
// Google reCaptcha.

/*
function onSubmit(token) {
    alert('Your contact message was successfully sent.');
    document.getElementById('submit').submit();
  }

*/
const textbox = document.getElementById('message');
const serverUrl = 'Http://localhost:8080/spanishrightaway/contact/';
let subject = 'Information';
let contactMail = 'spanishrightaway@gmail.com';


// Gmail alert

const gmail = $('#gmail');

gmail.click(event => {
    event.preventDefault();
    alert('Contact us through ' + contactMail);
})

// Submit 

const contactForm = $('form[name="contact"]');
const output = $('.response-output');
const submitButton = $('#submit');
var response1;
var error1;

contactForm.on('submit', (event) => {
    event.preventDefault();
    postContact(contactForm[0]);
    output.slideToggle();
    submitButton.slideToggle();
});

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        } : { 'Accept': 'application/json' }
    }).then(response => {
        if (!response.ok) {
            return response.json().then(errResData => {
                const error = new Error(errResData.message);
                error.data = errResData;
                error1 = errResData;
                printOutput(error.message, 'failed');
                throw error;
            });
        }
        return response.json();
    });
};



function postContact(value) {

    console.log('postContact() was called');

    let contactRequest = {
        name: value.elements['name'].value,
        lastName: value.elements['lastName'].value,
        email: value.elements['email'].value,
        source: value.elements['find-us'][value.elements['find-us'].selectedIndex].text,
        newsletter: value.elements['news'].checked,
        subject: subject,
        message: value.elements['message'].value
    };

    checkContent(contactRequest.message);

    sendHttpRequest('POST', serverUrl, contactRequest)
        .then(responseData => {
            response = responseData;
            console.log(responseData);
            printOutput('Your request was succesfully sended! We will answer you as soon as possible, don\'t forget to check your ' + 
            'promotions/spam inbox just in case', 'success');
        })
        .catch(err => {
            console.log(err, err.data);
            printOutput('Something went wrong: ' + err.message + ' You can try again later or contact us via our email' + contactMail, 'failed');
            error = err;
        });


};

function checkContent(message) {

    if(subject === 'Newsletter - Ebook request' && message.trim() != 'Hey! I\'m interested in the Ebook, resources and promotions.') {
        subject = 'Information';
    }
    
    if (message.trim() == 'Hey! I\'m interested in the Ebook, resources and promotions.') {
        subject = 'Newsletter - Ebook request';
    }

    if (message === '') {
        subject = 'Newsletter - Ebook request';
    }


}

//Output

function printOutput(stringValue, status) {

    if (status == 'success') {
        output.addClass('success');
    }
    if (status == 'failed') {
        output.addClass('failed');
    }
    output[0].innerText = stringValue;

}

//Free stuff

$('#ebook').click(function () {
    subject = 'Newsletter - Ebook request';
    textbox.value = 'Hey! I\'m interested in the Ebook, resources and promotions.';
});

$('#btnFreeClass').click(function () {
    subject = 'Classes - Booking for Free class';
    textbox.value = 'Hey! I\'m interested in booking  a free class, I would like to have more info and what\'s next.';
});

$('#bookFreeClass').click(function () {
    subject = 'Classes - Booking for Free class';
    textbox.value = 'Hey! I\'m interested in booking  a free class, I would like to have more info and what\'s next.';
});

//Services

$('#book101').click(function () {
    subject = 'Classes - Booking for 101';
    textbox.value = 'Hey! I\'m interested in booking \"101\" classes, I would like to have more info and what\'s next.';
});

$('#bookConecta').click(function () {
    subject = 'Classes - Booking for Conecta';
    textbox.value = 'Hey! I\'m interested in booking \"Conecta\" classes, I would like to have more info and what\'s next.';
});

$('#bookMedellin').click(function () {
    subject = 'Classes - Booking for Medellin';
    textbox.value = 'Hey! I\'m interested in booking \"Medellin\" classes, I would like to have more info and what\'s next.';
});

// Packages

$('#bookIlimitado').click(function () {
    subject = 'Packages - Booking for Ilimitado';
    textbox.value = 'Hey! I\'m interested in an \"Ilimitado\" package offer, I would like to have more info and what\'s next.';
});

$('#bookCompass').click(function () {
    subject = 'Packages - Booking for Compass';
    textbox.value = 'Hey! I\'m interested in a \"Compass\" Package offer, I would like to have more info and what\'s next.';
});

$('#bookCaracas').click(function () {
    subject = 'Packages - Booking for Caracas';
    textbox.value = 'Hey! I\'m interested in a \"Caracas\" Package offer, I would like to have more info and what\'s next.';
});