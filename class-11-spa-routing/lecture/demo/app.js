page('/', index);
page('/contact', contact);
page();

function index() {
  document.querySelector('p')
    .textContent = 'Index page generated on the client';
};

function contact() {
  document.querySelector('p')
    .textContent = 'Contact page generated on the client, too!';
};
