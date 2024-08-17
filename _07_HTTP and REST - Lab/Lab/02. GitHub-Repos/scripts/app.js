function loadRepos() {
	const BASE_URL = 'https://api.github.com/users/testnakov/repos'
	const resultContainer = document.getElementById('res');

	fetch(BASE_URL)
		.then((res) => res.text())
		.then((data) => {
			resultContainer.textContent = data 
		});
}