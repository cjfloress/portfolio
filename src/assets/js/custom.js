const empty = function () {
	const x = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, .empty');

	for (let i = 0; i < x.length; i++) {
		if (x[i].innerHTML === '' || x[i].innerHTML === null || x[i].length === 0 || x[i].innerHTML.trim().length === 0) {
			x[i].classList.add('d-none');
		} else {
			x[i].classList.remove('d-none');
		}
	}
};

const emptySecondAgent = function () {
	const x = document.querySelectorAll('.empty-agent');

	for (let i = 0; i < x.length; i++) {
		if (x[i].innerHTML === null || x[i].length === 0 || x[i].innerHTML.trim().length === 0 || x[i].innerHTML === '0' || x[i].innerHTML === '-') {
			x[i].parentElement.parentElement.parentElement.classList.add('d-none');
		} else {
			x[i].parentElement.parentElement.parentElement.classList.remove('d-none');
		}
	}
};

const emptyAlt = function () {
	const x = document.querySelectorAll('.empty-alt');

	for (let i = 0; i < x.length; i++) {
		if (x[i].innerHTML === null || x[i].length === 0 || x[i].innerHTML.trim().length === 0 || x[i].innerHTML === '0' || x[i].innerHTML === '-') {
			x[i].parentElement.parentElement.classList.add('d-none');
		} else {
			x[i].parentElement.parentElement.classList.remove('d-none');
		}
	}
};

empty();
emptySecondAgent();
emptyAlt();
