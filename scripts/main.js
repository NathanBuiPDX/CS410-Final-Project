const username = document.getElementById('username');
username.addEventListener('input', (event) => {
	if (username.value.length <= 0) {
		username.setCustomValidity('Username can not be empty!');
		username.reportValidity();
	} else {
		username.setCustomValidity('');
	}
});

const email = document.getElementById('email');
username.addEventListener('input', (event) => {
	if (email.validity.typeMismatch) {
		email.setCustomValidity('Email is not valid!');
		email.reportValidity();
	} else {
		email.setCustomValidity('');
	}
});

const msg = document.getElementById('msg');
msg.addEventListener('input', (event) => {
	if (msg.value.length <= 0) {
		msg.setCustomValidity("Please don't send me empty email!");
		msg.reportValidity();
	} else {
		msg.setCustomValidity('');
	}
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const validForm =
		!email.validity.typeMismatch &&
		msg.value.length > 0 &&
		username.value.length > 0;
	if (!validForm)
		window.alert('Invalid Form! Please fill out all the required fields.');
	else form.submit();
});
