
// Google reCaptcha.

/*
function onSubmit(token) {
    alert('Your contact message was successfully sent.');
    document.getElementById('submit').submit();
  }

const textbox = document.getElementById('message');
let subject = 'Information';
*/

// Gmail alert

const gmail = $('#gmail');

gmail.click(event => {
    event.preventDefault();
    alert('Contact us through spanishrightaway@gmail.com');
})

// Submit 

const contactForm = $('form[name="contact"]');
    contactForm.on('submit', (event) => {
    event.preventDefault();
    postContact();
});

function postContact() {
    console.log('lo logramos compa');
    

};

//Free stuff

$('#ebook').click(function(){
    subject = 'Newsletter - Ebook request';
    textbox.value = 'Hey! I\'m interested in the Ebook, resources and promotions.';
});

$('#btnFreeClass').click(function(){
    subject = 'Classes - Booking for Free class';
    textbox.value = 'Hey! I\'m interested in booking  a free class, I would like to more info and what\'s next.';
});

$('#bookFreeClass').click(function(){
    subject = 'Classes - Booking for Free class';
    textbox.value = 'Hey! I\'m interested in booking  a free class, I would like to more info and what\'s next.';
});

//Services

$('#book101').click(function(){
    subject = 'Classes - Booking for 101';
    textbox.value = 'Hey! I\'m interested in booking \"101\" classes, I would like to more info and what\'s next.';
});

$('#bookConecta').click(function(){
    subject = 'Classes - Booking for Conecta';
    textbox.value = 'Hey! I\'m interested in booking \"Conecta\" classes, I would like to more info and what\'s next.';
});

$('#bookMedellin').click(function(){
    subject = 'Classes - Booking for Medellin';
    textbox.value = 'Hey! I\'m interested in booking \"Medellin\" classes, I would like to more info and what\'s next.';
});

// Packages

$('#bookIlimitado').click(function(){
    subject = 'Packages - Booking for Ilimitado';
    textbox.value = 'Hey! I\'m interested in an \"Ilimitado\" package offer, I would like to more info and what\'s next.';
});

$('#bookCompass').click(function(){
    subject = 'Packages - Booking for Compass';
    textbox.value = 'Hey! I\'m interested in a \"Compass\" Package offer, I would like to more info and what\'s next.';
});

$('#bookCaracas').click(function(){
    subject = 'Packages - Booking for Caracas';
    textbox.value = 'Hey! I\'m interested in a \"Caracas\" Package offer, I would like to more info and what\'s next.';
});