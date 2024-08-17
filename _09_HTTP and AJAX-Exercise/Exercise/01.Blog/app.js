function attachEvents() {

    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments'

    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');

    const postsSelect = document.getElementById('posts');

    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    let allObj = {};
    loadPostsBtn.addEventListener('click', loadBtnHandler);


    function loadBtnHandler() {

        postsSelect.innerHTML = '';

        fetch(POSTS_URL)
            .then((res) => res.json())
            .then((data) => {
                allObj = data;

                for (const key in data) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = data[key].title;
                    postsSelect.appendChild(option);
                }
            });
    }

    viewBtn.addEventListener('click', viewBtnHandler)

    function viewBtnHandler() {
        postComments.innerHTML = '';
        postBody.textContent = allObj[postsSelect.value].body;
        postTitle.textContent = allObj[postsSelect.value].title;
        fetch(COMMENTS_URL)
            .then((res) => res.json())
            .then((data) => {
            
                const filtredComments = Object.values(data).filter(e => e.postId === postsSelect.value);
                filtredComments.forEach((comment) => {
                    const li = document.createElement('li');
                    li.id = comment.id;
                    li.textContent = comment.text;
                    postComments.appendChild(li);
                });
            });
    }

}

attachEvents();

// let allPosts = {};

// loadPostsBtn.addEventListener('click', async () => {
//     // postsSelect.innerHTML = '';

//     const response = await fetch(POSTS_URL);
//     allPosts = await response.json();

//     for (const [postId, postObj] of Object.entries(allPosts)) {
//         const option = document.createElement('option');
//         option.value = postId;
//         option.textContent = postObj.title;
//         postsSelect.appendChild(option);
//     }
// });

// viewBtn.addEventListener('click', async () => {
//     postComments.innerHTML = '';
//     const postId = postsSelect.value;
//     postBody.textContent = allPosts[postId].body;
//     postTitle.textContent = allPosts[postId].title;

//     const response = await fetch(COMMENTS_URL);
//     const commentsInfo = await response.json();

//     const filteredComments = Object.values(commentsInfo).filter(e => e.postId === postId);

//     filteredComments.forEach((comment) => {
//         const li = document.createElement('li');
//         li.id = comment.id;
//         li.textContent = comment.text;
//         postComments.appendChild(li);
//     })

// });