function loadRepos() {
	const BASE_URL = 'https://api.github.com/users/';
	const username = document.getElementById('username');
	const usernameValue = username.value;
	const reposContainer = document.getElementById('repos');

	fetch(`${BASE_URL}${usernameValue}/repos`)
		.then(res => res.json())
		.then((data) => {
			data.forEach(element => {
				const li = document.createElement('li');
				const a = document.createElement('a');
				a.href = element.html_url;
				a.textContent = element.full_name;
				li.appendChild(a);
				reposContainer.appendChild(li);
			});
		})
		.catch((err) => {
			const li = document.createElement('li');
			li.textContent = err.message;
			reposContainer.appendChild(li)

		})
}