window.addEventListener("load", solve);

function solve() {
    const titleElement = document.getElementById('task-title');
    const categoryElement = document.getElementById('task-category');
    const contentElement = document.getElementById('task-content');

    const reviewList = document.getElementById('review-list');
    const publishList = document.getElementById('published-list');

    const publishBtn = document.getElementById('publish-btn');
    publishBtn.addEventListener('click', createTask);

    function createTask(e) {
        if(titleElement.value == '' || categoryElement.value == '' || contentElement.value == '') {
            return;
        }

        const titleValue = titleElement.value;
        const categoryValue = categoryElement.value;
        const contentValue = contentElement.value;

        const li = document.createElement('li');
        li.className = 'rpost';
        

        const article = document.createElement('article');
        li.appendChild(article);

        const h4Title = document.createElement('h4');
        h4Title.textContent = titleElement.value;
        article.appendChild(h4Title);

        const categotyP = document.createElement('p');
        categotyP.textContent = `Category: ${categoryElement.value}`;
        article.appendChild(categotyP);

        const contentP = document.createElement('p');
        contentP.textContent = `Content: ${contentElement.value}`
        article.appendChild(contentP);

        const editBtn = document.createElement('button');
        editBtn.classList = 'action-btn edit';
        editBtn.textContent = 'Edit';

        const postBtn = document.createElement('button');
        postBtn.classList = 'action-btn post';
        postBtn.textContent = 'Post';

        li.appendChild(editBtn);
        li.appendChild(postBtn);

        reviewList.appendChild(li);
    
        titleElement.value = '';
        categoryElement.value = '';
        contentElement.value = '';

        editBtn.addEventListener('click', () => {
            titleElement.value = titleValue;
            categoryElement.value = categoryValue;
            contentElement.value = contentValue;
            li.remove();
        });

        postBtn.addEventListener('click', () => {
            li.remove();
            publishList.appendChild(li);
            editBtn.remove();
            postBtn.remove();
        });
    }
}