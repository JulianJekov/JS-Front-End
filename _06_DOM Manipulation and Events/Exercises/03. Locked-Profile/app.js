function lockedProfile() {
    btns = document.querySelectorAll('button');
    btnsArr = Array.from(btns);
    btnsArr.forEach(btn => btn.addEventListener('click', showMore));


    function showMore(e) {
        let btn = e.target;
        let profile = e.target.parentElement;
        let unlocked = profile.querySelector('input[value="unlock"]');
        let hiddenInfo = profile.querySelector('div');

        if (!unlocked.checked) {
            return;
        }

        if (btn.textContent === 'Show more') {
            hiddenInfo.style.display = 'block';
            btn.textContent = 'Hide it';
        } else if (btn.textContent === 'Hide it') {
            hiddenInfo.style.display = 'none';
            btn.textContent = 'Show more';
        }
    }
}