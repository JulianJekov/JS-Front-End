function solution() {
    const ARTICLE_URL = 'http://localhost:3030/jsonstore/advanced/articles/list/';

    const main = document.getElementById('main');

    fetch(ARTICLE_URL)
        .then((res) => res.json())
        .then((data) => {
            data.forEach(articleInfo => {
                const articleElement = document.createElement('div');
                articleElement.className = 'accordion'
                articleElement.innerHTML =
                    `<div class="head">
                        <span>${articleInfo.title}</span>
                        <button class="button" id="${articleInfo._id}" 
                        onClick="moreBtnHandler(event)">More</button>
                    </div>
                    <div class="extra"></div>`
                main.appendChild(articleElement);
            });
        })
        .catch((err) => {
            console.error(err);
        });
}
const ARTICLE_DETAILS = 'http://localhost:3030/jsonstore/advanced/articles/details/';

function moreBtnHandler(event) {
    const currentTarget = event.currentTarget;
    const id = event.currentTarget.id;
    const parent = event.currentTarget.parentNode.parentNode;
    const extraDiv = parent.querySelector('.extra');


    fetch(ARTICLE_DETAILS + id)
        .then((res) => res.json())
        .then((data) => {
            extraDiv.innerHTML = `<p>${data.content}</p>`

            if (currentTarget.textContent === 'More') {
                currentTarget.textContent = 'Less';
                extraDiv.style.display = 'block';
            } else {
                currentTarget.textContent = 'More';
                extraDiv.style.display = 'none';
            }
        })
}

solution();