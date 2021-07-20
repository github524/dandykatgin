/*!
* Start Bootstrap - Business Casual v6.0.0 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
$('.list-hours li').eq(new Date().getDay()).addClass('today');

document.getElementById('cYear').innerText = new Date().getFullYear()

function showSquare() {
    document.getElementById('confirmAge').style.display = 'none';
    document.getElementById('squareBuyBox').style.display = 'flex';
}