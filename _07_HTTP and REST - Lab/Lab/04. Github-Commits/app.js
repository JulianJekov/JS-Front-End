function loadCommits() {
    const username = document.getElementById('username');
    const repo = document.getElementById('repo')
    const usernmaeValue = username.value;
    const repoValue = repo.value;
    const commits = document.getElementById('commits');

    const BASE_URL = 'https://api.github.com/repos/';

    fetch(`${BASE_URL}${usernmaeValue}/${repoValue}/commits`)
        .then((res) => res.json())
        .then((data) => {
            data.forEach(({commit}) => {
                const li = document.createElement('li');
                li.textContent = `${commit.author.name}: ${commit.message}`;
                
                commits.appendChild(li);
            })
        })
        .catch((err) => {
            console.error(err);
        })
}