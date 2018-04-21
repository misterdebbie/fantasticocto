console.log('e a r t h y');
let theDate = new Date;
let displayThis = theDate.toDateString();
let theResult = document.getElementById('timeTarget');
theResult.textContent =displayThis;

let msg = '<div class=\"header\"><a id=\"close\" href="#">X</a></div>';
msg += '<div><h2>Give me your email!</h2>';
msg += 'I won\'t share it ;) ';

let infoTarget = document.getElementById('infoTarget');
infoTarget.addEventListener('click', (event) => {
  console.log('thanks for entering data');
  console.log(event.target.val());
  console.log(event.target);
  event.preventDefault();
}, false);
