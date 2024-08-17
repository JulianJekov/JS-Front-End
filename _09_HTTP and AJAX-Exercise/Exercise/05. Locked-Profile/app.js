async function lockedProfile() {

    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');


    const response = await fetch(BASE_URL)
    let data = await response.json();
    let count = 1;
    for (const { _id, username, email, age } of Object.values(data)) {

        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');

        const img = document.createElement('img');
        img.src = './iconProfile2.png';
        img.classList.add('userIcon');

        const labelLock = document.createElement('label');
        labelLock.textContent = 'Lock';

        const inputLock = document.createElement('input');
        inputLock.type = 'radio';
        inputLock.name = `user${count}Locked`;
        inputLock.value = `lock`;
        inputLock.checked = true;

        const labelUnlock = document.createElement('label');
        labelUnlock.textContent = 'Unlock';

        const inputUnlock = document.createElement('input');
        inputUnlock.type = 'radio';
        inputUnlock.name = `user${count}Locked`;
        inputUnlock.value = 'unlock';

        const br = document.createElement('br');
        const hr = document.createElement('hr');

        const labelUsername = document.createElement('label');
        labelUsername.textContent = 'Username';

        const inputUsername = document.createElement('input');
        inputUsername.type = 'text';
        inputUsername.name = `user${count}Username`;
        inputUsername.value = `${username}`;
        inputUsername.disabled = true;
        inputUsername.readOnly;

        const divHiddenFields = document.createElement('div');
        divHiddenFields.classList.add('hiddenInfo');

        const secondHr = document.createElement('hr');

        const labelEmail = document.createElement('label');
        labelEmail.textContent = 'Email:';

        const inputEmail = document.createElement('input');
        inputEmail.type = 'email';
        inputEmail.name = `user${count}Email`;
        inputEmail.value = `${email}`;
        inputEmail.disabled = true;
        inputEmail.readOnly;

        const labelAge = document.createElement('label');
        labelAge.textContent = 'Age:';

        const inputAge = document.createElement('input');
        inputAge.type = 'email';
        inputAge.name = `user${count}Age`;
        inputAge.value = `${age}`;
        inputAge.disabled = true;
        inputAge.readOnly;

        divHiddenFields.appendChild(secondHr);
        divHiddenFields.appendChild(labelEmail);
        divHiddenFields.appendChild(inputEmail);
        divHiddenFields.appendChild(labelAge);
        divHiddenFields.appendChild(inputAge);

        const showMoreBtn = document.createElement('button');
        showMoreBtn.textContent = 'Show more';

        showMoreBtn.addEventListener('click', (e) => {
            
                let btn = e.target;
                let profile = e.target.parentElement;
                let unlocked = profile.querySelector('input[value="unlock"]');
                let hiddenInfo = profile.querySelector('div.hiddenInfo');
        
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
            
        });

        profileDiv.appendChild(img);
        profileDiv.appendChild(labelLock);
        profileDiv.appendChild(inputLock);
        profileDiv.appendChild(labelUnlock);
        profileDiv.appendChild(inputUnlock);
        profileDiv.appendChild(br);
        profileDiv.appendChild(hr);
        profileDiv.appendChild(labelUsername);
        profileDiv.appendChild(inputUsername);
        profileDiv.appendChild(divHiddenFields);
        profileDiv.appendChild(showMoreBtn);

        main.appendChild(profileDiv);
        count++;
    }


}